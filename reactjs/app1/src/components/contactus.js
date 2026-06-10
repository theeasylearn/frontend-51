import React from "react";
import './site.css';
export default class Contactus extends React.Component {
    render() {
        return (<div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="courses.html">Courses</a></li>
                    <li className="nav-item"><a className="nav-link" href="career.html">Career</a></li>
                    <li className="nav-item"><a className="nav-link active" href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div className="container mt-5 pt-5">
                <div className="row g-5">
                    {/* Contact Form */}
                    <div className="col-lg-7">
                        <h2 className="mb-4">Get In Touch</h2>
                        <form action="#" method="POST">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Full Name" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="tel" className="form-control" placeholder="Mobile Number" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="mb-3">
                                <select className="form-select">
                                    <option>Interested Course</option>
                                    <option>AI/ML &amp; Data Science</option>
                                    <option>Full Stack Development</option>
                                    <option>Cyber Security</option>
                                    <option>Flutter Development</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" rows={5} placeholder="Your Message / Query" defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg px-5">Send Message</button>
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="col-lg-5">
                        <h2 className="mb-4">Visit Us</h2>
                        <div className="contact-info">
                            <p><strong><i className="fas fa-map-marker-alt" /> Address:</strong><br />
                                105 - EVA SURBHI, Opp. Aksharwadi Temple,<br />
                                Waghawadi Road, Bhavnagar, Gujarat 364002</p>
                            <p><strong><i className="fas fa-phone" /> Phone:</strong><br />
                                +91 96625 12857</p>
                            <p><strong><i className="fas fa-envelope" /> Email:</strong><br />
                                theeasylearnacademy@gmail.com</p>
                            <p><strong>Timings:</strong><br />
                                Mon - Sat: 8:00 AM - 8:00 PM</p>
                        </div>
                        <div className="mt-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.123!2d72.151!3d21.765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5d9f!2sEVA%20SURBHI!5e0!3m2!1sen!2sin!4v1720000000000" width="100%" height={250} style={{ "border": "0", "border-radius": "10px" }} allowFullScreen loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}