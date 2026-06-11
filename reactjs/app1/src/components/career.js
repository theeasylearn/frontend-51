import React from "react";
import './site.css';
import Sitemenu from './sitemenu';
// class component 
export default class Career extends React.Component {
    render() {
        return (<div>
            <Sitemenu />
            <div className="container mt-5 pt-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold">Launch Your IT Career</h1>
                    <p className="lead">From Learning to Earning – We Support You at Every Step</p>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6">
                        <h3 className="mb-4"><i className="fas fa-rocket text-primary" /> Placement Support</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">• Resume Building &amp; Portfolio Development</li>
                            <li className="list-group-item">• Mock Interviews &amp; Soft Skills Training</li>
                            <li className="list-group-item">• Direct Company Tie-ups</li>
                            <li className="list-group-item">• 1000+ Students Placed</li>
                            <li className="list-group-item">• Job Fair &amp; Campus Recruitment</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="mb-4"><i className="fas fa-chart-line text-success" /> Job Roles You Can Get</h3>
                        <div className="row text-center">
                            <div className="col-6 mb-3"><div className="p-3 border rounded">Full Stack Developer</div></div>
                            <div className="col-6 mb-3"><div className="p-3 border rounded">AI/ML Engineer</div></div>
                            <div className="col-6 mb-3"><div className="p-3 border rounded">Flutter Developer</div></div>
                            <div className="col-6 mb-3"><div className="p-3 border rounded">Cyber Security Analyst</div></div>
                            <div className="col-6 mb-3"><div className="p-3 border rounded">Data Analyst</div></div>
                            <div className="col-6 mb-3"><div className="p-3 border rounded">Web Designer</div></div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <a href="contact.html" className="btn btn-lg btn-primary">Get Career Guidance →</a>
                </div>
            </div>
        </div>
        );
    }
}