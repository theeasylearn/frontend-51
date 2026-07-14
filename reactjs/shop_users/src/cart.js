import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Cart extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                <div className="container my-5 footer-padding">
                    <div className="cart-section">
                        <table className="table">
                            <thead>
                                <tr className="table-row table-top-row">
                                    <th className="table-wrapper wrapper-product">
                                        <h5 className="table-heading">PRODUCT</h5>
                                    </th>
                                    <th className="table-wrapper">
                                        <div className="table-wrapper-center text-center">
                                            <h5 className="table-heading">PRICE</h5>
                                        </div>
                                    </th>
                                    <th className="table-wrapper">
                                        <div className="table-wrapper-center text-center">
                                            <h5 className="table-heading">QUANTITY</h5>
                                        </div>
                                    </th>
                                    <th className="table-wrapper wrapper-total">
                                        <div className="table-wrapper-center text-center">
                                            <h5 className="table-heading">TOTAL</h5>
                                        </div>
                                    </th>
                                    <th className="table-wrapper">
                                        <div className="table-wrapper-center text-center">
                                            <h5 className="table-heading">ACTION</h5>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row ticket-row">
                                    <td className="table-wrapper wrapper-product">
                                        <div className="wrapper d-flex align-items-center">
                                            <div className="wrapper-img" style={{ marginRight: '15px' }}>
                                                <img src="theme/assets/images/homepage-one/product-img/product-img-1.webp" alt="img" width="80" className="rounded" />
                                            </div>
                                            <div className="wrapper-content">
                                                <h5 className="heading mb-0">Classic Oxford Shirt</h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="table-wrapper text-center">
                                        <div className="table-wrapper-center">
                                            <h5 className="heading">$10.00</h5>
                                        </div>
                                    </td>
                                    <td className="table-wrapper text-center">
                                        <div className="table-wrapper-center">
                                            <h5 className="heading">1</h5>
                                        </div>
                                    </td>
                                    <td className="table-wrapper wrapper-total text-center">
                                        <div className="table-wrapper-center">
                                            <h5 className="heading">$10.00</h5>
                                        </div>
                                    </td>
                                    <td className="table-wrapper text-center">
                                        <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr className="table-row ticket-row">
                                    <td className="table-wrapper wrapper-product" colSpan="3">
                                        <span className="fs-3 fw-bold">TOTAL</span>
                                    </td>
                                    <td className="table-wrapper text-center" colSpan="2">
                                        <div className="table-wrapper-center">
                                            <span className="fs-3 fw-bold">$10.00</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="wishlist-btn cart-btn text-end mt-4">
                        <Link to="/checkout" className="shop-btn text-decoration-none">Proceed to Checkout</Link>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
