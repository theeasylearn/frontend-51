import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import withHooks from './hoc';
import axios from 'axios';
import { getBaseUrl } from './common';
import { showError, showMessage } from './message';
import { ToastContainer } from 'react-toastify';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            password: '',
            confirm_password: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleRegister = (e) => {
        e.preventDefault();
        const { email, phone, password, confirm_password } = this.state;

        if (!email || !phone || !password || !confirm_password) {
            showError("All fields are required");
            return;
        }

        if (password !== confirm_password) {
            showError("Passwords do not match");
            return;
        }

        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('mobile', phone);

        let apiAddress = getBaseUrl() + 'register.php';
        let options = {
            url: apiAddress,
            method: 'post',
            data: formData,
            responseType: 'json'
        };

        axios(options).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            } else {
                let msgObj = response.data.find(item => item.message !== undefined);
                let message = msgObj ? msgObj.message : "Registered successfully";
                showMessage(message);
                setTimeout(() => {
                    this.props.navigate('/login');
                }, 2000);
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

                <section className="login account footer-padding">
                    <div className="container">
                        <div className="login-section">
                            <div className="review-form">
                                <h5 className="comment-title">Create Account</h5>

                                <div className="account-inner-form mb-3">
                                    <div className="review-form-name">
                                        <label htmlFor="email" className="form-label">Email*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="user@gmail.com"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="account-inner-form mb-3">
                                    <div className="review-form-name">
                                        <label htmlFor="phone" className="form-label">Phone*</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="form-control"
                                            placeholder="+880388**0899"
                                            value={this.state.phone}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="review-form-name address-form mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="review-form-name address-form mb-3">
                                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirm_password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={this.state.confirm_password}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="login-btn text-center">
                                    <button type="submit" className="shop-btn w-100" onClick={this.handleRegister}>Sign up</button>
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

export default withHooks(Register);
