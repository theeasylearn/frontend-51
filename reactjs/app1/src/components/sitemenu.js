export default function Sitemenu() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand fw-bold" href="index.html">
                <i className="fas fa-graduation-cap" /> EasyLearn Academy
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="courses.html">Courses</a></li>
                    <li className="nav-item"><a className="nav-link" href="career.html">Career</a></li>
                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </nav>);
}