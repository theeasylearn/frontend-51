import {Link} from 'react-router-dom';
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
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/aboutus'>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/course">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/career">Career</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}