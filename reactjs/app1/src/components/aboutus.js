import './site.css';
import Sitemenu from './sitemenu';
export default function Aboutus() {
    return (<div>
        <Sitemenu />
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