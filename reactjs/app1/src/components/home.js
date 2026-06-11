import './site.css';
import Sitemenu from './sitemenu';
export default function Home() {
    return (<div>
        <Sitemenu />
        {/* Hero Section */}
        <section className="hero text-white text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="display-4 fw-bold mb-4">Transform Your Future with IT Skills</h1>
                        <p className="lead mb-5">Best IT Training Institute in Bhavnagar | Job-Oriented Courses with 100% Practical Training &amp; Placement Support</p>
                        <a href="courses.html" className="btn btn-primary btn-lg me-3">Explore Courses</a>
                        <a href="contact.html" className="btn btn-outline-light btn-lg">Book Free Demo</a>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Us */}
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col">
                        <h2 className="fw-bold">Why Choose EasyLearn Academy?</h2>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 text-center border-0 shadow-sm">
                            <div className="card-body">
                                <i className="fas fa-chalkboard-teacher fa-3x text-primary mb-3" />
                                <h5>Expert Trainers</h5>
                                <p>Google-certified trainers with industry experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 text-center border-0 shadow-sm">
                            <div className="card-body">
                                <i className="fas fa-laptop fa-3x text-primary mb-3" />
                                <h5>100% Practical Training</h5>
                                <p>Hands-on projects &amp; real-world scenarios</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 text-center border-0 shadow-sm">
                            <div className="card-body">
                                <i className="fas fa-briefcase fa-3x text-primary mb-3" />
                                <h5>Placement Assistance</h5>
                                <p>Strong industry connections for job placement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Popular Courses */}
        <section className="py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-5">Popular Courses</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card course-card h-100 shadow-sm">
                            <img src="https://picsum.photos/id/201/400/250" className="card-img-top" alt="AI/ML" />
                            <div className="card-body">
                                <h5 className="card-title">AI/ML &amp; Data Science</h5>
                                <p className="card-text">Master TensorFlow, Python, Machine Learning &amp; Deep Learning</p>
                                <a href="courses.html" className="btn btn-outline-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card course-card h-100 shadow-sm">
                            <img src="https://picsum.photos/id/180/400/250" className="card-img-top" alt="Full Stack" />
                            <div className="card-body">
                                <h5 className="card-title">Full Stack Development</h5>
                                <p className="card-text">MERN, PHP, React, Flutter &amp; Web Development</p>
                                <a href="courses.html" className="btn btn-outline-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card course-card h-100 shadow-sm">
                            <img src="https://picsum.photos/id/107/400/250" className="card-img-top" alt="Cyber Security" />
                            <div className="card-body">
                                <h5 className="card-title">Cyber Security</h5>
                                <p className="card-text">Ethical Hacking, Kali Linux, Network Security</p>
                                <a href="courses.html" className="btn btn-outline-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Testimonials */}
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center fw-bold mb-5">What Our Students Say</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <p>"Best IT training in Bhavnagar! Got placed in a top company after completing Full Stack course."</p>
                                <strong>- Rahul Patel</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <p>"Practical training and supportive faculty. Highly recommended for AI/ML aspirants."</p>
                                <strong>- Priya Sharma</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <p>"Affordable fees with excellent placement support. Changed my career completely."</p>
                                <strong>- Amit Joshi</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Footer */}
        <footer className="text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>EasyLearn Academy</h5>
                        <p>105, EVA SURBHI, Opp. Aksharwadi Temple, Waghawadi Road, Bhavnagar, Gujarat 364002</p>
                        <p><i className="fas fa-phone" /> +91 96625 12857</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="about.html" className="text-white">About Us</a></li>
                            <li><a href="courses.html" className="text-white">Courses</a></li>
                            <li><a href="career.html" className="text-white">Career</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <a href="#" className="text-white me-3"><i className="fab fa-facebook fa-2x" /></a>
                        <a href="#" className="text-white me-3"><i className="fab fa-instagram fa-2x" /></a>
                        <a href="#" className="text-white"><i className="fab fa-youtube fa-2x" /></a>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    © 2026 The Easylearn Academy, Bhavnagar. All Rights Reserved.
                </div>
            </div>
        </footer>
    </div>
    );
}