import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                <section className="login footer-padding">
                    <div className="container">
                        <div className="login-section">
                            <div className="review-form">
                                <h5 className="comment-title">Log In</h5>
                                <div className="review-inner-form">
                                    <div className="review-form-name mb-3">
                                        <label htmlFor="email" className="form-label">Email Address*</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="review-form-name mb-3">
                                        <label htmlFor="password" className="form-label">Password*</label>
                                        <input type="password" id="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Link to="/forgotpassword" className="text-decoration-none text-primary">Forgot password?</Link>
                                </div>
                                <div className="login-btn text-center">
                                    <button type="submit" className="shop-btn w-100" onClick={() => alert('Logged in successfully!')}>Sign in</button>
                                </div>
                                <div className="text-center mt-3">
                                    <p className="mb-0">Don't have an account? <Link to="/register" className="text-decoration-none text-primary">Sign up</Link></p>
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
