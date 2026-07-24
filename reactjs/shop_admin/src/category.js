import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
import React, { useEffect, useState } from 'react';
import { getBaseUrl, getImageBase } from './common';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { showError, showMessage } from './message';
export default function Category() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        //run this code only one time 
        if (categories.length == 0) {
            // We always use useEffect hook in function component to get data from server using api calling 
            let apiAddress = getBaseUrl() + "category.php";
            let option = {
                'url': apiAddress,
                'method': 'get',
                'responseType': 'json'
            };

            // Calling api 
            axios(option).then((response) => {
                // response.data property has actual response received from server
                console.log(response.data);
                /*
                [   
                0 {"error":"no"},
                1 {"total":6},
                2 {"id":"1","title":"laptop","photo":"laptop.jpg","islive":"1","isdeleted":"0"},
                3{"id":"2","title":"mobile","photo":"mobile.jpg","islive":"1","isdeleted":"0"},
                4{"id":"3","title":"book","photo":"books.jpg","islive":"1","isdeleted":"0"},
                5{"id":"4","title":"Cookies & waffers","photo":"Cookies.jpg","islive":"1","isdeleted":"0"},
                6{"id":"5","title":"Washing Powders","photo":"washing_powders.jpg","islive":"1","isdeleted":"0"},
                7{"id":"6","title":"shampoo","photo":"shampoo.jpg","islive":"1","isdeleted":"0"}] 
                */
                let error = response.data[0]['error'];
                if (error != 'no') {
                    alert(error);
                }
                else {
                    //no error 
                    let total = response.data[1]['total'];
                    if (total === 0) {
                        alert("category not found")
                    }
                    else {
                         //call function
                        showMessage();
                        //there are few categories (total is not zero)
                        //delete 2 object from beginning as it is not actual data
                        response.data.splice(0, 2);
                        //store remaining  categories into state array
                        setCategories(response.data);
                    }
                }
            }).catch((error) => {
                showError()
            });
        }
    });

    return (
        <div className="wrapper">
            <Sidebar />
            <ToastContainer />
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
                                            <span className="text-bg-primary p-1">Existing Categories</span> - Category management
                                        </h4>
                                        <Link to="/add-category" className="btn btn-sm btn-primary">Add Category</Link>
                                    </div>
                                    <div className="card-body">
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
                                                {categories.map((item) => {
                                                    return (<tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>
                                                            <img src={getImageBase() + "category/" + item.photo} className='img-fluid' />
                                                        </td>
                                                        <td>{item.islive}</td>
                                                        <td>
                                                            <button type='button' className='btn btn-warning'>Edit</button>
                                                            <button type='button' className='btn btn-danger'>Delete</button>
                                                        </td>
                                                    </tr>);
                                                })}
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