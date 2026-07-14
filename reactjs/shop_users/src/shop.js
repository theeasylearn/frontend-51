import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Shop extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                <section className="product-category my-5 footer-padding">
                    <div className="container">
                        <div className="section-title">
                            <h5>Our Categories</h5>
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

                <Footer />
            </div>
        );
    }
}
