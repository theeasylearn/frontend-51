import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import { getBaseUrl, getImageBase } from './common';
import axios from 'axios';
import { showError } from './message';
import { ToastContainer } from 'react-toastify';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: []
        };
    }

    componentDidMount() {
        // Fetch categories
        let categoryApiAddress = getBaseUrl() + 'category.php';
        let categoryOptions = {
            url: categoryApiAddress,
            method: 'get',
            responseType: 'json'
        };
        axios(categoryOptions).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            } else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("No Categories found");
                } else {
                    response.data.splice(0, 2);
                    this.setState({
                        categories: response.data
                    });
                }
            }
        }).catch((error) => {
            showError();
        });

        // Fetch products
        let productApiAddress = getBaseUrl() + 'product.php';
        let productOptions = {
            url: productApiAddress,
            method: 'GET',
            responseType: 'json'
        };
        axios(productOptions).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            } else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("No product available");
                } else {
                    response.data.splice(0, 2);
                    this.setState({
                        products: response.data
                    });
                }
            }
        }).catch((error) => {
            showError();
        });
    }

    render() {
        const newArrivals = this.state.products.slice(0, 4);
        const topSelling = this.state.products.length >= 8
            ? this.state.products.slice(4, 8)
            : this.state.products.slice(0, 4).reverse();

        return (
            <div>
                <ToastContainer />
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
                            {this.state.categories.map((item) => (
                                <div className="product-wrapper" data-aos="fade-right" data-aos-duration="100" key={item.id}>
                                    <div className="wrapper-img">
                                        <Link to={"/product/" + item.id}>
                                            <img src={getImageBase() + "category/" + item.photo} alt={item.title} />
                                        </Link>
                                    </div>
                                    <div className="wrapper-info">
                                        <Link to={"/product/" + item.id} className="wrapper-details">{item.title}</Link>
                                    </div>
                                </div>
                            ))}
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
                            <div className='row'>
                                {newArrivals.map((item) => (
                                    <div className="col-lg-3 col-sm-6" key={item.id}>
                                        <div className="product-wrapper aos-init aos-animate" data-aos="fade-up">
                                            <div className="product-img">
                                                <Link to={"/product-detail/" + item.id}>
                                                    <img src={getImageBase() + "product/" + item.photo} alt={item.title} />
                                                </Link>
                                                <div className="product-cart-items">
                                                    <Link to="#" className="favourite cart-item">
                                                        <span className="text-danger"><i className="fa fa-heart fa-2x fa-beat"></i></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-description">
                                                    <Link to={"/product-detail/" + item.id} className="product-details">{item.title}</Link>
                                                    <div className="price">
                                                        <span className="new-price">{item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-btn">
                                                <Link to="/cart" className="product-btn text-decoration-none">Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                                {topSelling.map((item) => (
                                    <div className="col-lg-4 col-md-6" key={item.id}>
                                        <div className="product-wrapper" data-aos="fade-right">
                                            <div className="product-img">
                                                <Link to={"/product-detail/" + item.id}>
                                                    <img src={getImageBase() + "product/" + item.photo} alt={item.title} />
                                                </Link>
                                                <div className="product-cart-items"></div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-description">
                                                    <Link to={"/product-detail/" + item.id} className="product-details">{item.title}</Link>
                                                    <div className="price">
                                                        <span className="new-price">{item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-btn">
                                                <Link to="/cart" className="product-btn text-decoration-none">Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}
