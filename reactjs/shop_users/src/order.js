import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Order extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                <section className="order product footer-padding">
                    <div className="container">
                        <div className="order-title">
                            <h5 className="wrapper-heading">Track Your Order</h5>
                            <p className="paragraph">Enter your order tracking number and your secret id.</p>
                            <div className="order-section">
                                <div className="row gy-5">
                                    <div className="col-lg-8">
                                        <div className="login-section">
                                            <div className="review-form">
                                                <div className="review-inner-form">
                                                    <div className="review-form-name">
                                                        <label htmlFor="track-number" className="form-label">Order Tracking Number*</label>
                                                        <input type="number" id="track-number" className="form-control" placeholder="Order Number" />
                                                    </div>
                                                    <div className="review-form-name">
                                                        <label htmlFor="Delivery" className="form-label">Delivery Date*</label>
                                                        <input type="date" id="Delivery" className="form-control" />
                                                    </div>
                                                </div>
                                                <button onClick={() => alert('Order status retrieved successfully!')} className="shop-btn mt-3 border-0">Track Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="order-img text-center" data-aos="fade-right" data-aos-duration="1000">
                                            <img src="theme/assets/images/homepage-one/order.png" alt="order" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}
