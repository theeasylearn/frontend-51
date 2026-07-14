import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class ChangePassword extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />

                <section className="login footer-padding">
                    <div className="container">
                        <div className="login-section">
                            <div className="review-form" style={{ height: '560px' }}>
                                <h5 className="comment-title">Change Password</h5>
                                <div className="review-inner-form">
                                    <div className="review-form-name mb-3">
                                        <label htmlFor="curr_password" className="form-label">Current Password*</label>
                                        <input type="password" id="curr_password" className="form-control" placeholder="password" />
                                    </div>
                                    <div className="review-form-name mb-3">
                                        <label htmlFor="new_password" className="form-label">New Password*</label>
                                        <input type="password" id="new_password" className="form-control" placeholder="password" />
                                    </div>
                                    <div className="review-form-name mb-3">
                                        <label htmlFor="conf_password" className="form-label">Confirm New Password*</label>
                                        <input type="password" id="conf_password" className="form-control" placeholder="password" />
                                    </div>
                                </div>
                                <div className="login-btn text-center mt-4">
                                    <button type="submit" className="shop-btn w-100" onClick={() => alert('Password updated successfully!')}>Save changes</button>
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
