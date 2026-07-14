import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class ForgotPassword extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                <section className="login footer-padding">
                    <div className="container">
                        <div className="login-section">
                            <div className="review-form" style={{ height: '360px' }}>
                                <h5 className="comment-title">Recover my account</h5>
                                <div className="review-inner-form">
                                    <div className="review-form-name">
                                        <label htmlFor="email" className="form-label">Email Address*</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="login-btn text-center mt-4">
                                    <button type="submit" className="shop-btn w-100" onClick={() => alert('Recovery email sent!')}>Let do it</button>
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
