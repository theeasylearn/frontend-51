import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class AddProduct extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                {/* form section */}
                <section className="login account footer-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card shadow">
                                    <div className="card-header text-bg-light">
                                        <h4 className="mb-0 p-2 text-dark">Add New Product</h4>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="review-form">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="pname" className="form-label">Product Name*</label>
                                                    <input type="text" id="pname" className="form-control" placeholder="Product Name" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="price" className="form-label">Price ($)*</label>
                                                    <input type="number" id="price" className="form-control" placeholder="0.00" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="category" className="form-label">Category*</label>
                                                    <select id="category" className="form-control">
                                                        <option value="">Select Category</option>
                                                        <option value="dresses">Dresses</option>
                                                        <option value="shirts">Shirts</option>
                                                        <option value="bags">Bags</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="image" className="form-label">Product Image*</label>
                                                    <input type="file" id="image" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="desc" className="form-label">Description</label>
                                                <textarea id="desc" className="form-control" rows="4" placeholder="Enter product description..."></textarea>
                                            </div>
                                            <div className="login-btn mt-4">
                                                <button type="submit" className="shop-btn" onClick={() => alert('Product added successfully!')}>Save Product</button>
                                                <Link to="/product" className="btn btn-secondary ms-3 py-3 px-5 rounded">Cancel</Link>
                                            </div>
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
