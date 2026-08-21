import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import withHooks from './hoc';
import axios from 'axios';
import { getBaseUrl } from './common';
import { showError, showMessage } from './message';
import { ToastContainer } from 'react-toastify';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            address: '',
            address2: '',
            city: '',
            number: '', // pincode
            mobile: '',
            remarks: '',
            cartItems: [],
            total: 0,
            loading: true
        };
    }

    componentDidMount() {
        let userid = this.props.cookies.id;
        if (!userid) {
            showError("Please log in first to checkout.");
            setTimeout(() => {
                this.props.navigate('/login');
            }, 2000);
            return;
        }

        let apiAddress = getBaseUrl() + "cart.php?usersid=" + userid;
        let option = {
            url: apiAddress,
            method: "GET",
            responseType: "json"
        };
        axios(option).then((response) => {
            let error = response.data[0]['error'];
            if (error === 'no') {
                let total = response.data[1]['total'];
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
            } else {
                this.setState({ cartItems: [], total: 0, loading: false });
            }
        }).catch((error) => {
            console.error("Error fetching cart summary:", error);
            this.setState({ loading: false });
        });
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    placeOrder = (e) => {
        e.preventDefault();
        const { fname, address, address2, city, number, mobile, remarks } = this.state;

        if (!fname || !address || !address2 || !city || !number || !mobile || !remarks) {
            showError("All billing fields are required.");
            return;
        }

        let userid = this.props.cookies.id;
        if (!userid) {
            showError("User not logged in.");
            return;
        }

        let formData = new FormData();
        formData.append('usersid', userid);
        formData.append('fullname', fname);
        formData.append('address1', address);
        formData.append('address2', address2);
        formData.append('mobile', mobile);
        formData.append('city', city);
        formData.append('pincode', number);
        formData.append('remarks', remarks);

        let apiAddress = getBaseUrl() + "checkout.php";
        let option = {
            url: apiAddress,
            method: "POST",
            data: formData,
            responseType: "json"
        };

        axios(option).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            } else {
                let msgObj = response.data.find(item => item.message !== undefined);
                let message = msgObj ? msgObj.message : "Order placed successfully!";
                showMessage(message);
                setTimeout(() => {
                    this.props.navigate('/');
                }, 2000);
            }
        }).catch((error) => {
            showError("Failed to place order.");
        });
    }

    render() {
        return (
            <div>
                <Sidebar />
                <ToastContainer />

                <div className="container my-5 footer-padding">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card shadow">
                                <div className="card-header text-bg-light text-center">
                                    <h3>Checkout Details</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.placeOrder} className="review-form">
                                        <div className="account-inner-form mb-3">
                                            <div className="review-form-name">
                                                <label htmlFor="fname" className="form-label">Full Name*</label>
                                                <input
                                                    type="text"
                                                    id="fname"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                    value={this.state.fname}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="account-inner-form mb-3">
                                            <div className="review-form-name">
                                                <label htmlFor="mobile" className="form-label">Mobile Number*</label>
                                                <input
                                                    type="tel"
                                                    id="mobile"
                                                    className="form-control"
                                                    placeholder="Mobile Number"
                                                    value={this.state.mobile}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="review-form-name address-form mb-3">
                                            <label htmlFor="address" className="form-label">Address Line 1*</label>
                                            <input
                                                type="text"
                                                id="address"
                                                className="form-control"
                                                placeholder="Enter your Address line 1"
                                                value={this.state.address}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="review-form-name address-form mb-3">
                                            <label htmlFor="address2" className="form-label">Address Line 2*</label>
                                            <input
                                                type="text"
                                                id="address2"
                                                className="form-control"
                                                placeholder="Enter your Address line 2"
                                                value={this.state.address2}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>

                                        <div className="account-inner-form city-inner-form mb-3">
                                            <div className="review-form-name address-form mb-3">
                                                <label htmlFor="city" className="form-label">City*</label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    className="form-control"
                                                    placeholder="City"
                                                    value={this.state.city}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="review-form-name">
                                                <label htmlFor="number" className="form-label">Postcode / ZIP*</label>
                                                <input
                                                    type="number"
                                                    id="number"
                                                    className="form-control"
                                                    placeholder="0000"
                                                    value={this.state.number}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="review-form-name address-form mb-3">
                                            <label htmlFor="remarks" className="form-label">Order Remarks*</label>
                                            <textarea
                                                id="remarks"
                                                className="form-control"
                                                placeholder="Remarks"
                                                value={this.state.remarks}
                                                onChange={this.handleInputChange}
                                            ></textarea>
                                        </div>

                                        <div className="subtotal payment-type mb-4">
                                            <p className="fw-bold">Payment mode</p>
                                            <div className="checkbox-item mb-2">
                                                <input type="radio" id="cash" name="bank" defaultChecked style={{ marginRight: '8px' }} />
                                                <label htmlFor="cash" className="wrapper-heading">Cash on Delivery</label>
                                            </div>
                                            <div className="checkbox-item">
                                                <input type="radio" id="credit" name="bank" style={{ marginRight: '8px' }} />
                                                <label htmlFor="credit" className="wrapper-heading">Credit/Debit Cards or Paypal</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="shop-btn w-100">Place Order Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card shadow">
                                <div className="card-header">
                                     <h5 className="wrapper-heading mb-0">Order Summary</h5>
                                </div>
                                <div className="card-body">
                                    <div className="checkout-wrapper">
                                        <div className="account-section billing-section">
                                            {this.state.loading ? (
                                                <div className="text-center my-4">
                                                    <p className="text-muted">Loading summary...</p>
                                                </div>
                                            ) : this.state.cartItems.length === 0 ? (
                                                <div className="text-center my-4">
                                                    <p className="text-muted">No items in your cart.</p>
                                                </div>
                                            ) : (
                                                <div className="order-summery">
                                                    <div className="subtotal product-total d-flex justify-content-between">
                                                        <h5 className="wrapper-heading">PRODUCT</h5>
                                                        <h5 className="wrapper-heading">TOTAL</h5>
                                                    </div>
                                                    <hr />
                                                    <div className="subtotal product-total">
                                                        <ul className="product-list list-unstyled">
                                                            {this.state.cartItems.map((item) => (
                                                                <li className="d-flex justify-content-between mb-2" key={item.id}>
                                                                    <div className="product-info">
                                                                        <h5 className="wrapper-heading">{item.title} x{item.quantity || 1}</h5>
                                                                    </div>
                                                                    <div className="price">
                                                                        <h5 className="wrapper-heading">${(parseFloat(item.price) * parseInt(item.quantity || 1)).toFixed(2)}</h5>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <hr />
                                                    <div className="subtotal product-total d-flex justify-content-between">
                                                        <h5 className="wrapper-heading">TOTAL</h5>
                                                        <h5 className="wrapper-heading">${this.state.total.toFixed(2)}</h5>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <Link to="/cart" className="btn btn-secondary w-100 mt-4">Back to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default withHooks(Checkout);
