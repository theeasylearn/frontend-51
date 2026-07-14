import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Product extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                <div className="container my-5 footer-padding">
                    <div className="row">
                        <div className="col-12">
                            <h4>Shop Products</h4>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-wrapper aos-init aos-animate" data-aos="fade-up">
                                    <div className="product-img">
                                        <Link to="/product-detail">
                                            <img src="theme/assets/images/homepage-one/product-img/product-img-5.webp" alt="product-img" />
                                        </Link>
                                        <div className="product-cart-items">
                                            <Link to="#" className="favourite cart-item">
                                                <span className="text-danger"><i className="fa fa-heart fa-2x fa-beat"></i></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-description">
                                            <Link to="/product-detail" className="product-details">Tom Checked shirt</Link>
                                            <div className="price">
                                                <span className="new-price">$26.99</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-cart-btn">
                                        <Link to="/cart" className="product-btn text-decoration-none">Add To Cart</Link>
                                    </div>
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
