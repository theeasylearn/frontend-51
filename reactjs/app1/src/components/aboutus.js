import './site.css';
export default function Aboutus() {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand fw-bold" href="index.html">
                    <i className="fas fa-graduation-cap" /> EasyLearn Academy
                </a>
                {/* Same nav links as above */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link active" href="about.html">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="courses.html">Courses</a></li>
                        <li className="nav-item"><a className="nav-link" href="career.html">Career</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="display-5 fw-bold text-center mb-4">About EasyLearn Academy</h1>
                    <p className="lead text-center">Since 2010, EasyLearn Academy has been Bhavnagar's most trusted destination for IT education. Our mission is simple: transform passionate learners into industry-ready professionals.</p>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <h4>Our Vision</h4>
                            <p>To be the leading IT training institute providing accessible, high-quality education to students in Bhavnagar and surrounding areas.</p>
                        </div>
                        <div className="col-md-6">
                            <h4>Our Mission</h4>
                            <p>Deliver job-oriented courses with 100% practical training, modern curriculum, and strong placement support.</p>
                        </div>
                    </div>
                    <h4 className="mb-3">Why Students Love Us</h4>
                    <ul className="list-group">
                        <li className="list-group-item">• No laptop required for training</li>
                        <li className="list-group-item">• 7 days free trial available</li>
                        <li className="list-group-item">• Affordable fees with flexible payment options</li>
                        <li className="list-group-item">• Government-certified courses available</li>
                        <li className="list-group-item">• Placement assistance for all courses</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* Footer (same as index.html) */}
        <footer className="text-white py-5 mt-5">
            {/* Paste the footer from index.html */}
        </footer>
    </div>
    )
}