import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Checkout extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                <div className="container my-5 footer-padding">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card shadow">
                                <div className="card-header text-bg-light text-center">
                                    <h3>Checkout Details</h3>
                                </div>
                                <div className="card-body">
                                    <div className="review-form">
                                        <div className="account-inner-form mb-3">
                                            <div className="review-form-name">
                                                <label htmlFor="fname" className="form-label">Full Name</label>
                                                <input type="text" id="fname" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>

                                        <div className="review-form-name address-form mb-3">
                                            <label htmlFor="address" className="form-label">Address Line 1*</label>
                                            <input type="text" id="address" className="form-control" placeholder="Enter your Address line 1" />
                                        </div>
                                        <div className="review-form-name address-form mb-3">
                                            <label htmlFor="address2" className="form-label">Address Line 2*</label>
                                            <input type="text" id="address2" className="form-control" placeholder="Enter your Address line 2" />
                                        </div>

                                        <div className="account-inner-form city-inner-form mb-3">
                                            <div className="review-form-name address-form mb-3">
                                                <label htmlFor="city" className="form-label">City</label>
                                                <input type="text" id="city" className="form-control" placeholder="City" />
                                            </div>
                                            <div className="review-form-name">
                                                <label htmlFor="number" className="form-label">Postcode / ZIP*</label>
                                                <input type="number" id="number" className="form-control" placeholder="0000" />
                                            </div>
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
                                        <button type="submit" className="shop-btn w-100" onClick={() => alert('Order Placed Successfully!')}>Place Order Now</button>
                                    </div>
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
                                            <div className="order-summery">
                                                <div className="subtotal product-total d-flex justify-content-between">
                                                    <h5 className="wrapper-heading">PRODUCT</h5>
                                                    <h5 className="wrapper-heading">TOTAL</h5>
                                                </div>
                                                <hr />
                                                <div className="subtotal product-total">
                                                    <ul className="product-list list-unstyled">
                                                        <li className="d-flex justify-content-between">
                                                            <div className="product-info">
                                                                <h5 className="wrapper-heading">Classic Oxford Shirt x1</h5>
                                                            </div>
                                                            <div className="price">
                                                                <h5 className="wrapper-heading">$10.00</h5>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <hr />
                                                <div className="subtotal product-total d-flex justify-content-between">
                                                    <h5 className="wrapper-heading">TOTAL</h5>
                                                    <h5 className="wrapper-heading">$10.00</h5>
                                                </div>
                                            </div>
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
