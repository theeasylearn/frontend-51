import './site.css';

export default function Course() {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand fw-bold" href="index.html">
                    <i className="fas fa-graduation-cap" /> EasyLearn Academy
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                        <li className="nav-item"><a className="nav-link active" href="courses.html">Courses</a></li>
                        <li className="nav-item"><a className="nav-link" href="career.html">Career</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container mt-5 pt-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Our Job-Oriented Courses</h1>
                <p className="lead">100% Practical Training • Expert Faculty • Placement Support</p>
            </div>
            <div className="row g-4">
                {/* Course 1 */}
                <div className="col-lg-4 col-md-6">
                    <div className="card course-card h-100 shadow">
                        <div className="card-header bg-primary text-white text-center fw-bold">AI/ML &amp; Data Science</div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check text-success" /> Python, TensorFlow, Keras</li>
                                <li><i className="fas fa-check text-success" /> Machine Learning &amp; Deep Learning</li>
                                <li><i className="fas fa-check text-success" /> NLP &amp; Computer Vision</li>
                                <li><i className="fas fa-check text-success" /> Real Projects &amp; Deployment</li>
                            </ul>
                            <span className="badge bg-success">6 Months</span>
                        </div>
                        <div className="card-footer">
                            <a href="contact.html" className="btn btn-primary w-100">Enquire Now</a>
                        </div>
                    </div>
                </div>
                {/* Course 2 */}
                <div className="col-lg-4 col-md-6">
                    <div className="card course-card h-100 shadow">
                        <div className="card-header bg-success text-white text-center fw-bold">Full Stack Development</div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check text-success" /> MERN / PHP + MySQL</li>
                                <li><i className="fas fa-check text-success" /> React.js &amp; Flutter</li>
                                <li><i className="fas fa-check text-success" /> Bootstrap 5 &amp; Tailwind</li>
                                <li><i className="fas fa-check text-success" /> Live Project Training</li>
                            </ul>
                            <span className="badge bg-success">6 Months</span>
                        </div>
                        <div className="card-footer">
                            <a href="contact.html" className="btn btn-primary w-100">Enquire Now</a>
                        </div>
                    </div>
                </div>
                {/* Course 3 */}
                <div className="col-lg-4 col-md-6">
                    <div className="card course-card h-100 shadow">
                        <div className="card-header bg-danger text-white text-center fw-bold">Cyber Security</div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check text-success" /> Ethical Hacking</li>
                                <li><i className="fas fa-check text-success" /> Kali Linux, Metasploit</li>
                                <li><i className="fas fa-check text-success" /> Network &amp; Web Security</li>
                                <li><i className="fas fa-check text-success" /> CTF Challenges</li>
                            </ul>
                            <span className="badge bg-success">5 Months</span>
                        </div>
                        <div className="card-footer">
                            <a href="contact.html" className="btn btn-primary w-100">Enquire Now</a>
                        </div>
                    </div>
                </div>
                {/* Add more cards as needed */}
                <div className="col-lg-4 col-md-6">
                    <div className="card course-card h-100 shadow">
                        <div className="card-header bg-info text-white text-center fw-bold">Flutter Mobile App Development</div>
                        <div className="card-body">
                            <p>Build beautiful cross-platform apps</p>
                            <span className="badge bg-success">4 Months</span>
                        </div>
                        <div className="card-footer">
                            <a href="contact.html" className="btn btn-primary w-100">Enquire Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card course-card h-100 shadow">
                        <div className="card-header bg-warning text-dark text-center fw-bold">Web Designing &amp; UI/UX</div>
                        <div className="card-body">
                            <p>Bootstrap, Figma, Responsive Design</p>
                            <span className="badge bg-success">3 Months</span>
                        </div>
                        <div className="card-footer">
                            <a href="contact.html" className="btn btn-primary w-100">Enquire Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card course-card h-100 shadow">
                        <div className="card-header bg-secondary text-white text-center fw-bold">CCC + Tally with AI</div>
                        <div className="card-body">
                            <p>Government Certified + Accounting</p>
                            <span className="badge bg-success">2-3 Months</span>
                        </div>
                        <div className="card-footer">
                            <a href="contact.html" className="btn btn-primary w-100">Enquire Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer (copy from index.html) */}
        <footer className="text-white py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>EasyLearn Academy</h5>
                        <p>105, EVA SURBHI, Opp. Aksharwadi Temple,<br />Waghawadi Road, Bhavnagar, Gujarat</p>
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
                <div className="text-center">© 2026 The Easylearn Academy. All Rights Reserved.</div>
            </div>
        </footer>
    </div>
    )
}