import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import { getBaseUrl, getImageBase } from './common';
import axios from 'axios';
import { showMessage, showError } from './message';
import { ToastContainer } from 'react-toastify';
export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }

    }
    componentDidMount() {
        console.log('Shop component mounted');
        let apiAddress = getBaseUrl() + 'category.php';
        let options = {
            url: apiAddress,
            method: 'get',
            ResponseType: 'json'
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
                    showError("No Categories found");
                }
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        categories: response.data
                    });
                }
            }

        }).catch((error) => {
            showError();
        });
    }
    render() {
        return (
            <div>
                <ToastContainer />
                <Sidebar />

                <section className="product-category my-5 footer-padding">
                    <div className="container">
                        <div className="section-title">
                            <h5>Our Categories</h5>
                        </div>
                        <div className="category-section">
                            {this.state.categories.map((item) => {
                                return (
                                    <Link to={"/product/" + item.id} className="wrapper-details">
                                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration="100">
                                            <div className="wrapper-img">
                                                <img src={getImageBase() + "category/" + item.photo} alt="dress" />
                                            </div>
                                            <div className="wrapper-info">
                                                {item.title}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}
