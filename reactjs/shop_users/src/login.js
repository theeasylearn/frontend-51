import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import axios from 'axios';
import { getBaseUrl } from './common';
import { showError, showMessage } from './message';
import { ToastContainer } from 'react-toastify';
import withHooks from './hoc';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        if (!email || !password) {
            showError("Email and Password are required");
            return;
        }

        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        let apiAddress = getBaseUrl() + 'login.php';
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
                let idObj = response.data.find(item => item.id !== undefined);
                let msgObj = response.data.find(item => item.message !== undefined);
                let userId = idObj ? idObj.id : undefined;
                let message = msgObj ? msgObj.message : "Login successful";

                this.props.setCookie('id', userId, { path: '/' });
                showMessage(message);
                setTimeout(() => {
                    this.props.navigate('/');
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

                <section className="login footer-padding">
                    <div className="container">
                        <div className="login-section">
                            <div className="review-form">
                                <h5 className="comment-title">Log In</h5>
                                <div className="review-inner-form">
                                    <div className="review-form-name mb-3">
                                        <label htmlFor="email" className="form-label">Email Address*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="review-form-name mb-3">
                                        <label htmlFor="password" className="form-label">Password*</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Link to="/forgotpassword" className="text-decoration-none text-primary">Forgot password?</Link>
                                </div>
                                <div className="login-btn text-center">
                                    <button type="submit" className="shop-btn w-100" onClick={this.handleLogin}>Sign in</button>
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

export default withHooks(Login);
