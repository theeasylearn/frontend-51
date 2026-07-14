import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
export default class Category extends React.Component {
    render() {
        return (<div className="wrapper">
            <Sidebar />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle">
                        <i className="hamburger align-self-center" />
                    </a>
                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3" />
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="card-title mb-0 text-dark">
                                            <span className="text-bg-primary p-1">Existing Categories</span> - Category
                                            management
                                        </h4>
                                        <Link to="/add-category" className="btn btn-sm btn-primary">Add Category</Link>
                                    </div>
                                    <div className="card-body">
                                        {/* create html table that display category id, title, photo, islive and button to edit and delete category */}
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Title</th>
                                                    <th>Photo</th>
                                                    <th>Is Live</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Category 1</td>
                                                    <td>
                                                        <a data-fancybox="gallery" href="https://picsum.photos/id/1035/1200/800">
                                                            <img src="http://picsum.photos/50" className="img-fluid rounded" alt="Category Image" />
                                                        </a>
                                                    </td>
                                                    <td>Yes</td>
                                                    <td>
                                                        <Link to="/edit-category" className="btn btn-sm btn-primary">Edit</Link>
                                                        <button className="btn btn-sm btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <SiteFooter />  
            </div>
        </div>
        );
    }
}