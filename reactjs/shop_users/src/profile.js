import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'info' // 'info', 'password', 'orders'
        };
    }

    renderInfo() {
        return (
            <div className="card shadow">
                <div className="card-header text-bg-light">
                    <h4 className="mb-0 text-dark">Personal Information</h4>
                </div>
                <div className="card-body p-4">
                    <div className="review-form">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="fname" className="form-label">First Name</label>
                                <input type="text" id="fname" className="form-control" defaultValue="John" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lname" className="form-label">Last Name</label>
                                <input type="text" id="lname" className="form-control" defaultValue="Doe" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" id="email" className="form-control" defaultValue="john.doe@example.com" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="tel" id="phone" className="form-control" defaultValue="+1347-430-9510" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" id="address" className="form-control" defaultValue="2140 W Thunderbird Rd, Phoenix, Arkansas 85023" />
                        </div>
                        <button className="shop-btn mt-3" onClick={() => alert('Profile updated successfully!')}>Update Profile</button>
                    </div>
                </div>
            </div>
        );
    }

    renderPassword() {
        return (
            <div className="card shadow">
                <div className="card-header text-bg-light">
                    <h4 className="mb-0 text-dark">Change Password</h4>
                </div>
                <div className="card-body p-4">
                    <div className="review-form">
                        <div className="mb-3">
                            <label htmlFor="curr_pass" className="form-label">Current Password</label>
                            <input type="password" id="curr_pass" className="form-control" placeholder="••••••••" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="new_pass" className="form-label">New Password</label>
                            <input type="password" id="new_pass" className="form-control" placeholder="••••••••" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="conf_pass" className="form-label">Confirm New Password</label>
                            <input type="password" id="conf_pass" className="form-control" placeholder="••••••••" />
                        </div>
                        <button className="shop-btn mt-3" onClick={() => alert('Password updated successfully!')}>Update Password</button>
                    </div>
                </div>
            </div>
        );
    }

    renderOrders() {
        return (
            <div className="card shadow">
                <div className="card-header text-bg-light">
                    <h4 className="mb-0 text-dark">Order History</h4>
                </div>
                <div className="card-body p-4">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#SO-4392</td>
                                    <td>July 12, 2026</td>
                                    <td>$45.00</td>
                                    <td><span className="badge bg-success">Delivered</span></td>
                                    <td><Link to="/order" className="btn btn-sm btn-outline-primary">Track</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Sidebar />

                <section className="user-profile footer-padding">
                    <div className="container">
                        <div className="user-profile-section">
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <div className="card shadow">
                                        <div className="card-body text-center p-4">
                                            <img src="theme/assets/images/homepage-one/about/testimonial-1.png" alt="User Avatar" className="rounded-circle mb-3" width="100" />
                                            <h3>John Doe</h3>
                                            <p className="text-muted">john.doe@example.com</p>
                                            <hr />
                                            <div className="list-group">
                                                <button
                                                    onClick={() => this.setState({ activeTab: 'info' })}
                                                    className={`list-group-item list-group-item-action border-0 text-start py-3 px-4 ${this.state.activeTab === 'info' ? 'active' : ''}`}>
                                                    <i className="fa fa-user me-3"></i> Personal Info
                                                </button>
                                                <button
                                                    onClick={() => this.setState({ activeTab: 'orders' })}
                                                    className={`list-group-item list-group-item-action border-0 text-start py-3 px-4 ${this.state.activeTab === 'orders' ? 'active' : ''}`}>
                                                    <i className="fa fa-shopping-bag me-3"></i> Order History
                                                </button>
                                                <button
                                                    onClick={() => this.setState({ activeTab: 'password' })}
                                                    className={`list-group-item list-group-item-action border-0 text-start py-3 px-4 ${this.state.activeTab === 'password' ? 'active' : ''}`}>
                                                    <i className="fa fa-lock me-3"></i> Change Password
                                                </button>
                                                <Link to="/login" className="list-group-item list-group-item-action border-0 text-start py-3 px-4 text-danger">
                                                    <i className="fa fa-sign-out me-3"></i> Logout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    {this.state.activeTab === 'info' && this.renderInfo()}
                                    {this.state.activeTab === 'orders' && this.renderOrders()}
                                    {this.state.activeTab === 'password' && this.renderPassword()}
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
