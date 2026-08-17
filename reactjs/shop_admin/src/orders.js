import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
import { getBaseUrl } from './common';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from './message';
import useVerifyLogin from './verify-login';
export default function Orders() {
	useVerifyLogin();
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		if (orders.length == 0) {
			let apiAddress = getBaseUrl() + "orders.php";
			let option = {
				'url': apiAddress,
				'method': 'get',
				'responseType': 'json'
			};

			axios(option).then((response) => {
				let error = response.data[0]['error'];
				if (error != 'no') {
					alert(error);
				}
				else {
					let total = response.data[1]['total'];
					if (total === 0) {
						alert("orders not found");
					}
					else {
						showMessage();
						response.data.splice(0, 2);
						setOrders(response.data);
					}
				}
			}).catch((error) => {
				showError();
			});
		}
	});

	const getStatusBadge = (status) => {
		switch (status) {
			case "1":
				return <span className="badge bg-warning">Pending</span>;
			case "2":
				return <span className="badge bg-info">Confirmed</span>;
			case "3":
				return <span className="badge bg-primary">Shipped</span>;
			case "4":
				return <span className="badge bg-success">Delivered</span>;
			case "5":
				return <span className="badge bg-danger">Cancelled</span>;
			default:
				return <span className="badge bg-secondary">Unknown</span>;
		}
	};

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

							<h1 className="h3 mb-3">Order Management</h1>

							<div className="row">
								<div className="col-12">
									<div className="card">
										<div className="card-header">
											<h4 className="card-title mb-0 text-dark">
												<span className="text-bg-primary p-1">Existing Orders</span> - Orders list
											</h4>
										</div>
										<div className="card-body">
											<table className="table table-striped table-hover">
												<thead>
													<tr>
														<th>Order ID</th>
														<th>Date</th>
														<th>Customer</th>
														<th>Shipping Address</th>
														<th>Amount</th>
														<th>Status</th>
														<th>Actions</th>
													</tr>
												</thead>
												<tbody>
												{orders.map((item) => {
													return (
														<tr key={item.id}>
															<td>{item.id}</td>
															<td>{item.billdate}</td>
															<td>{item.fullname}</td>
															<td>{item.address1}, {item.address2}, {item.city} - {item.pincode}</td>
															<td>${parseFloat(item.amount).toLocaleString()}</td>
															<td>{getStatusBadge(item.orderstatus)}</td>
															<td>
																<Link 
																to={`/order-detail/` + item.id} className="btn btn-sm btn-primary">
																	<i className="align-middle" data-feather="eye" /> View Detail
																</Link>
															</td>
														</tr>
													);
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
