import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Register extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                <section className="login account footer-padding">
                    <div className="container">
                        <div className="login-section">
                            <div className="review-form">
                                <h5 className="comment-title">Create Account</h5>

                                <div className="account-inner-form mb-3">
                                    <div className="review-form-name">
                                        <label htmlFor="email" className="form-label">Email*</label>
                                        <input type="email" id="email" className="form-control" placeholder="user@gmail.com" />
                                    </div>
                                </div>
                                <div className="account-inner-form mb-3">
                                    <div className="review-form-name">
                                        <label htmlFor="phone" className="form-label">Phone*</label>
                                        <input type="tel" id="phone" className="form-control" placeholder="+880388**0899" />
                                    </div>
                                </div>
                                <div className="review-form-name address-form mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                                </div>
                                <div className="review-form-name address-form mb-3">
                                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                    <input type="password" id="confirm_password" className="form-control" placeholder="Enter your password" />
                                </div>
                                <div className="login-btn text-center">
                                    <button type="submit" className="shop-btn w-100" onClick={() => alert('Account created successfully!')}>Sign up</button>
                                </div>
                                <div className="text-center mt-3">
                                    <p className="mb-0">Already have an account? <Link to="/login" className="text-decoration-none text-primary">Sign in</Link></p>
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
