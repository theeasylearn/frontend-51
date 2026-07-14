import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                
                {/* Hero section */}
                <section id="hero" className="hero">
                    <div className="swiper hero-swiper">
                        <div className="swiper-wrapper hero-wrapper">
                            <div className="swiper-slide hero-slider-one">
                                <div className="container">
                                    <div className="col-lg-6">
                                        <div className="wrapper-section" data-aos="fade-up">
                                            <div className="wrapper-info">
                                                <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF</h5>
                                                <h1 className="wrapper-details">Fashion Collection Summer Sale</h1>
                                                <Link to="/product" className="shop-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide hero-slider-two">
                                <div className="container">
                                    <div className="col-lg-6">
                                        <div className="wrapper-section">
                                            <div className="wrapper-info">
                                                <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF</h5>
                                                <h1 className="wrapper-details">Fashion Collection Summer Sale</h1>
                                                <Link to="/product" className="shop-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide hero-slider-three">
                                <div className="container">
                                    <div className="col-lg-6">
                                        <div className="wrapper-section">
                                            <div className="wrapper-info">
                                                <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF</h5>
                                                <h1 className="wrapper-details">Fashion Collection Summer Sale</h1>
                                                <Link to="/product" className="shop-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>

                {/* Categories section */}
                <section className="product-category my-5">
                    <div className="container">
                        <div className="section-title">
                            <h5>Our Categories</h5>
                            <Link to="/shop" className="view">View All</Link>
                        </div>
                        <div className="category-section">
                            <div className="product-wrapper" data-aos="fade-right" data-aos-duration="100">
                                <div className="wrapper-img">
                                    <img src="theme/assets/images/homepage-one/category-img/dresses.webp" alt="dress" />
                                </div>
                                <div className="wrapper-info">
                                    <Link to="/product" className="wrapper-details">Dresses</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Arrivals section */}
                <section className="product arrival">
                    <div className="container">
                        <div className="section-title">
                            <h5>NEW ARRIVALS</h5>
                        </div>
                        <div className="arrival-section">
                            <div className="col-lg-3 col-sm-6">
                                <div className="product-wrapper aos-init aos-animate" data-aos="fade-up">
                                    <div className="product-img">
                                        <img src="theme/assets/images/homepage-one/product-img/product-img-5.webp" alt="product-img" />
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
                </section>

                {/* Top Selling Products section */}
                <section className="product top-selling">
                    <div className="container">
                        <div className="section-title">
                            <h5>Top Selling Products</h5>
                        </div>
                        <div className="top-selling-section">
                            <div className="row g-5">
                                <div className="col-lg-4 col-md-6">
                                    <div className="product-wrapper" data-aos="fade-right">
                                        <div className="product-img">
                                            <img src="theme/assets/images/homepage-one/product-img/product-img-5.webp" alt="product-img" />
                                            <div className="product-cart-items"></div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-description">
                                                <Link to="/product-detail" className="product-details">Leather Dress Shoes</Link>
                                                <div className="price">
                                                    <span className="new-price">$13.99</span>
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
                </section>

                <Footer />
            </div>
        );
    }
}
