import React from 'react';
export default class Sidebar extends React.Component {
    render() {
        return (
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
                        <span className="sidebar-brand-text align-middle">
                            Administrator
                        </span>
                    </a>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Modules
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="site_dashboard.html">
                                <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="site_category.html">
                                <i className="align-middle" data-feather="grid" /> <span className="align-middle">Categories</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="site_product.html">
                                <i className="align-middle" data-feather="shopping-bag" /> <span className="align-middle">Products</span>
                            </a>
                        </li>
                        <li className="sidebar-item active">
                            <a className="sidebar-link" href="site_users.html">
                                <i className="align-middle" data-feather="users" /> <span className="align-middle">Users</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="site_orders.html">
                                <i className="align-middle" data-feather="shopping-cart" /> <span className="align-middle">Orders</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
