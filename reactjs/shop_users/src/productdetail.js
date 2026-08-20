import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import { getBaseUrl, getImageBase } from "./common";
import axios from 'axios';
import withHooks from './hoc';
import { showError } from './message';
import { ToastContainer } from 'react-toastify';
class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            product: [],
            total: null
        };
    }

    handleIncrement = () => {
        this.setState({ quantity: this.state.quantity + 1 });
    };

    handleDecrement = () => {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };
    componentDidMount() {
        let productid = this.props.params.productid;
        let apiAddress = getBaseUrl() + "product.php?productid=" + productid;
        console.log(apiAddress);
        let options = {
            url: apiAddress,
            method: "GET",
            responseType: 'json'
        }
        axios(options).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("No product available");
                    this.setState({
                        product: [],
                        total: 0
                    })
                }
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        product: response.data,
                        total: total
                    })
                }
            }
        }).catch((error) => {
            showError(error);
        })
    }
    render() {
        return (
            <div>
                <Sidebar />
                <ToastContainer />
                {/* product detail details */}
                <div className="container my-5 footer-padding"> 
                    <div className="row">
                        {this.state.product.map((item) => {
                            return (
                                <div key={item.id} className="product-info-section">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-info-img" data-aos="fade-right">
                                                <img src={getImageBase() + "product/" + item.photo} className="img-fluid rounded" alt="Product" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="product-info-content" data-aos="fade-left">
                                                <h5 className="mb-5">{item.title}</h5>
                                                <table className="table table-striped fs-3">
                                                    <tbody>
                                                        <tr>
                                                            <td width="50%">Price</td>
                                                            <td><strong>{item.price}</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td width="50%">Quantity Available</td>
                                                            <td>{item.stock} items in stock</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="50%">Size</td>
                                                            <td>{item.size}</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="50%">Weight</td>
                                                            <td>{item.weight}</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="50%">Category</td>
                                                            <td>{item.category}</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="50%">Description</td>
                                                            <td>{item.description}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="product-quantity mt-4">
                                                    <div className="quantity-wrapper d-flex align-items-center mb-3">
                                                        <div className="quantity d-flex align-items-center me-3" style={{ border: '1px solid #ccc', padding: '5px 10px', borderRadius: '5px' }}>
                                                            <button onClick={this.handleDecrement} className="btn btn-link p-0 me-2 text-decoration-none text-dark" style={{ fontSize: '20px' }}>-</button>
                                                            <span className="number mx-2">{this.state.quantity}</span>
                                                            <button onClick={this.handleIncrement} className="btn btn-link p-0 ms-2 text-decoration-none text-dark" style={{ fontSize: '20px' }}>+</button>
                                                        </div>
                                                        <div className="wishlist">
                                                            <span>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17 1C14.9 1 13.1 2.1 12 3.7C10.9 2.1 9.1 1 7 1C3.7 1 1 3.7 1 7C1 13 12 22 12 22C12 22 23 13 23 7C23 3.7 20.3 1 17 1Z" stroke="#797979" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Link to="/cart" className="shop-btn d-inline-flex align-items-center text-decoration-none">
                                                        <span className="me-2">
                                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.25357 3.32575C8.25357 4.00929 8.25193 4.69283 8.25467 5.37583C8.25576 5.68424 8.31536 5.74439 8.62431 5.74439C9.964 5.74603 11.3031 5.74275 12.6428 5.74603C13.2728 5.74767 13.7397 6.05663 13.9246 6.58104C14.2209 7.42098 13.614 8.24232 12.6762 8.25052C11.5919 8.25982 10.5075 8.25271 9.4232 8.25271C9.17714 8.25271 8.93107 8.25216 8.68501 8.25271C8.2913 8.2538 8.25412 8.29154 8.25412 8.69838C8.25357 10.0195 8.25686 11.3412 8.25248 12.6624C8.25029 13.2836 7.92603 13.7544 7.39891 13.9305C6.56448 14.2088 5.75848 13.6062 5.74863 12.6821C5.73824 11.7251 5.74645 10.7687 5.7459 9.81173C5.7459 9.41965 5.74754 9.02812 5.74535 8.63604C5.74371 8.30849 5.69012 8.2538 5.36204 8.25326C4.02235 8.25162 2.68321 8.25545 1.34352 8.25107C0.719613 8.24943 0.249902 7.93008 0.0710952 7.40348C-0.212153 6.57065 0.388245 5.75916 1.31017 5.74658C2.14843 5.73564 2.98669 5.74384 3.82495 5.74384C4.30779 5.74384 4.79062 5.74384 5.274 5.74384C5.72184 5.7433 5.7459 5.71869 5.7459 5.25716C5.7459 3.95406 5.74317 2.65096 5.74699 1.34786C5.74863 0.720643 6.0625 0.253102 6.58799 0.0704598C7.40875 -0.213893 8.21803 0.370671 8.25248 1.27349C8.25303 1.29154 8.25303 1.31013 8.25303 1.32817C8.25357 1.99531 8.25357 2.66026 8.25357 3.32575Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                        <span>Add to Cart</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
export default withHooks(ProductDetail);
