import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import withHooks from './hoc';
import axios from 'axios';
import { showError } from './message';
import { getBaseUrl, getImageBase } from './common';
import { ToastContainer } from 'react-toastify';
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            total: null
        };
    }
    componentDidMount() {
        let categoryid = this.props.params.categoryid;
        let apiAddress="";
        if (categoryid===undefined)
        {
            apiAddress=getBaseUrl() + "product.php";
        }
        else {
            apiAddress = getBaseUrl() + "product.php?categoryid=" + categoryid;
        }
        let option = {
            url: apiAddress,
            method: "GET",
            responseType: "json"
        }
        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
                this.setState({
                    product: [],
                    total: 0
                });
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("No product available");
                    this.setState({
                        product: [],
                        total: 0
                    });
                }
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        product: response.data,
                        total: total
                    });
                }
            }
        }).catch((error) => {
            this.setState({
                product: [],
                total: 0
            });
        });
    }
    render() {
        return (
            <div>
                <Sidebar />
                <ToastContainer />
                <div className="container my-5 footer-padding">
                    <div className="row">
                        <div className="col-12">
                            <h4>Shop Products</h4>
                        </div>
                        <div className="row mt-4">
                            {this.state.total === 0 ? (
                                <div className="col-12 text-center my-5">
                                    <h4 className="text-muted">No product found</h4>
                                </div>
                            ) : (
                                this.state.product.map((item) => {
                                    return (<div className="col-lg-3 col-sm-6" key={item.id}>
                                        <div className="product-wrapper aos-init aos-animate" data-aos="fade-up">
                                            <div className="product-img">
                                                <Link to={"/product-detail/" + item.id}>
                                                    <img src={getImageBase() + "product/" + item.photo} alt="product-img" />
                                                </Link>
                                                <div className="product-cart-items">
                                                    <Link to="#" className="favourite cart-item">
                                                        <span className="text-danger"><i className="fa fa-heart fa-2x fa-beat"></i></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-description">
                                                    <Link to="/product-detail" className="product-details">{item.title}</Link>
                                                    <div className="price">
                                                        <span className="new-price">{item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-cart-btn">
                                                <Link to="/cart" className="product-btn text-decoration-none">Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            )}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
//this line is required to use hooks inside class 
export default withHooks(Product);