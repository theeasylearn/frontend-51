import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
        return (
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <Link className="sidebar-brand" to="/">
                        <span className="sidebar-brand-text align-middle">
                            Administrator
                        </span>
                    </Link>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Modules
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/dashboard">
                                <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/category">
                                <i className="align-middle" data-feather="grid" /> <span className="align-middle">Categories</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/product">
                                <i className="align-middle" data-feather="shopping-bag" /> <span className="align-middle">Products</span>
                            </Link>
                        </li>
                        <li className="sidebar-item active">
                            <Link className="sidebar-link" to="/users">
                                <i className="align-middle" data-feather="users" /> <span className="align-middle">Users</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/orders">
                                <i className="align-middle" data-feather="shopping-cart" /> <span className="align-middle">Orders</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/logout">
                                <i className="align-middle" data-feather="shopping-cart" /> <span className="align-middle">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
}
