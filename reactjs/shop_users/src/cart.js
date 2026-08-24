import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import withHooks from './hoc';
import axios from 'axios';
import { getBaseUrl, getImageBase } from './common';
import { showError, showMessage } from './message';
import { ToastContainer } from 'react-toastify';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            total: 0,
            loading: true
        };
    }

    componentDidMount() {
        this.fetchCart();
    }

    fetchCart = () => {
        let userid = this.props.cookies.id;
        if (!userid) {
            this.setState({ loading: false });
            return;
        }

        let apiAddress = getBaseUrl() + "cart.php?usersid=" + userid;
        let option = {
            url: apiAddress,
            method: "GET",
            responseType: "json"
        };
        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                this.setState({ cartItems: [], total: 0, loading: false });
            } else {
                response.data.splice(0, 2);
                let subtotal = 0;
                response.data.forEach(item => {
                    subtotal += parseFloat(item.price) * parseInt(item.quantity || 1);
                });
                this.setState({
                    cartItems: response.data,
                    total: subtotal,
                    loading: false
                });
            }
        }).catch((error) => {
            showError("Failed to fetch cart items.");
            this.setState({ loading: false });
        });
    }

    deleteFromCart = (cartid) => {
        let apiAddress = getBaseUrl() + "delete_from_cart.php?cartid=" + cartid;
        let option = {
            url: apiAddress,
            method: "GET",
            responseType: "json"
        };
        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            } else {
                showMessage(response.data[1]['message']);
                //remove delete items from cartItem
                const updatedCart = this.state.cartItems.filter(item => item.cartid !== cartid);
                this.setState({ cartItems: updatedCart });
                //update cart total
                let subtotal = 0;
                updatedCart.forEach(item => {
                    subtotal += parseFloat(item.price) * parseInt(item.quantity || 1);
                });
                this.setState({ total: subtotal });
            
            }
        }).catch((error) => {
            showError("Failed to remove item from cart.");
        });
    }

    render() {
        const userid = this.props.cookies.id;
        
        return (
            <div>
                <Sidebar />
                <ToastContainer />

                <div className="container my-5 footer-padding">
                    {!userid ? (
                        <div className="text-center my-5">
                            <h4 className="text-muted">Please log in to view your cart</h4>
                            <Link to="/login" className="shop-btn mt-3 d-inline-block text-decoration-none">Log In</Link>
                        </div>
                    ) : this.state.loading ? (
                        <div className="text-center my-5">
                            <h4 className="text-muted">Loading cart...</h4>
                        </div>
                    ) : this.state.cartItems.length === 0 ? (
                        <div className="text-center my-5">
                            <h4 className="text-muted">Your cart is empty</h4>
                            <Link to="/product" className="shop-btn mt-3 d-inline-block text-decoration-none">Shop Products</Link>
                        </div>
                    ) : (
                        <div className="cart-section">
                            <table className="table">
                                <thead>
                                    <tr className="table-row table-top-row">
                                        <th className="table-wrapper wrapper-product">
                                            <h5 className="table-heading">PRODUCT</h5>
                                        </th>
                                        <th className="table-wrapper">
                                            <div className="table-wrapper-center text-center">
                                                <h5 className="table-heading">PRICE</h5>
                                            </div>
                                        </th>
                                        <th className="table-wrapper">
                                            <div className="table-wrapper-center text-center">
                                                <h5 className="table-heading">QUANTITY</h5>
                                            </div>
                                        </th>
                                        <th className="table-wrapper wrapper-total">
                                            <div className="table-wrapper-center text-center">
                                                <h5 className="table-heading">TOTAL</h5>
                                            </div>
                                        </th>
                                        <th className="table-wrapper">
                                            <div className="table-wrapper-center text-center">
                                                <h5 className="table-heading">ACTION</h5>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.cartItems.map((item) => (
                                        <tr className="table-row ticket-row" key={item.id}>
                                            <td className="table-wrapper wrapper-product">
                                                <div className="wrapper d-flex align-items-center">
                                                    <div className="wrapper-img" style={{ marginRight: '15px' }}>
                                                        <img src={getImageBase() + "product/" + item.photo} alt="img" width="80" className="rounded" />
                                                    </div>
                                                    <div className="wrapper-content">
                                                        <h5 className="heading mb-0">{item.title}</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="table-wrapper text-center">
                                                <div className="table-wrapper-center">
                                                    <h5 className="heading">${parseFloat(item.price).toFixed(2)}</h5>
                                                </div>
                                            </td>
                                            <td className="table-wrapper text-center">
                                                <div className="table-wrapper-center">
                                                    <h5 className="heading">{item.quantity || 1}</h5>
                                                </div>
                                            </td>
                                            <td className="table-wrapper wrapper-total text-center">
                                                <div className="table-wrapper-center">
                                                    <h5 className="heading">${(parseFloat(item.price) * parseInt(item.quantity || 1)).toFixed(2)}</h5>
                                                </div>
                                            </td>
                                            <td className="table-wrapper text-center">
                                                <button onClick={() => this.deleteFromCart(item.cartid)} className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="table-row ticket-row">
                                        <td className="table-wrapper wrapper-product" colSpan="3">
                                            <span className="fs-3 fw-bold">TOTAL</span>
                                        </td>
                                        <td className="table-wrapper text-center" colSpan="2">
                                            <div className="table-wrapper-center">
                                                <span className="fs-3 fw-bold">${this.state.total.toFixed(2)}</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="wishlist-btn cart-btn text-end mt-4">
                                <Link to="/checkout" className="shop-btn text-decoration-none">Proceed to Checkout</Link>
                            </div>
                        </div>
                    )}
                </div>

                <Footer />
            </div>
        );
    }
}

export default withHooks(Cart);
