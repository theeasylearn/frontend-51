import './site.css';
export default function Pagenotfound() {
    return (<div>
        <div className="error-page">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <div className="error-code">404</div>
                        <h1 className="display-4 fw-bold mb-3">Oops! Page Not Found</h1>
                        <p className="lead mb-5">
                            The page you're looking for doesn't exist or has been moved.<br />
                            Don't worry, let's get you back on track!
                        </p>
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <a href="index.html" className="btn btn-primary btn-lg px-5">
                                <i className="fas fa-home" /> Back to Home
                            </a>
                            <a href="courses.html" className="btn btn-outline-primary btn-lg px-5">
                                <i className="fas fa-book" /> Browse Courses
                            </a>
                            <a href="contact.html" className="btn btn-outline-success btn-lg px-5">
                                <i className="fas fa-envelope" /> Contact Us
                            </a>
                        </div>
                        <div className="mt-5">
                            <img src="https://picsum.photos/id/201/600/300" className="img-fluid rounded shadow" alt="EasyLearn Academy" style={{ "max-width": "500px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer */}
        <footer className="text-white py-5 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>EasyLearn Academy</h5>
                        <p>105, EVA SURBHI, Opp. Aksharwadi Temple,<br />Waghawadi Road, Bhavnagar, Gujarat 364002</p>
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
    )
}