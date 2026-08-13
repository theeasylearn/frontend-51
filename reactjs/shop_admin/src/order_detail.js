import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
import { getBaseUrl } from './common';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from './message';

export default function OrderDetail() {
	const { orderid } = useParams();
	const [order, setOrder] = useState(null);
	const [items, setItems] = useState([]);

	const getOrderStatusBadge = (status) => {
		switch (status) {
			case "1":
				return <span className="badge bg-warning py-1 px-2">Pending</span>;
			case "2":
				return <span className="badge bg-info py-1 px-2">Confirmed</span>;
			case "3":
				return <span className="badge bg-primary py-1 px-2">Shipped</span>;
			case "4":
				return <span className="badge bg-success py-1 px-2">Delivered</span>;
			case "5":
				return <span className="badge bg-danger py-1 px-2">Cancelled</span>;
			default:
				return <span className="badge bg-secondary py-1 px-2">Unknown</span>;
		}
	};

	const getPaymentStatusBadge = (status) => {
		switch (status) {
			case "0":
				return <span className="badge bg-danger py-1 px-2">Failed</span>;
			case "1":
				return <span className="badge bg-warning py-1 px-2">Unpaid</span>;
			case "2":
				return <span className="badge bg-success py-1 px-2">Paid</span>;
			case "3":
				return <span className="badge bg-info py-1 px-2">Refunded</span>;
			default:
				return <span className="badge bg-secondary py-1 px-2">Unknown</span>;
		}
	};

	const getPaymentMode = (mode) => {
		switch (mode) {
			case "0":
				return "Cash on Delivery";
			case "1":
				return "Online Payment";
			default:
				return "Unknown Mode";
		}
	};

	useEffect(() => {
		if (orderid) {
			// Fetch order details
			let orderApiAddress = getBaseUrl() + "orders.php?id=" + orderid;
			let orderOption = {
				url: orderApiAddress,
				method: 'get',
				responseType: 'json'
			};

			axios(orderOption).then((response) => {
				let error = response.data[0]['error'];
				if (error !== 'no') {
					showError(error);
				}
				else {
					let total = response.data[1]['total'];
					if (total === 0) {
						showError("order not found");
					}
					else {
						setOrder(response.data[2]);
					}
				}
			}).catch((error) => {
				showError();
			});

			// Fetch order items
			let itemsApiAddress = getBaseUrl() + "order_details.php?orderid=" + orderid;
			let itemsOption = {
				url: itemsApiAddress,
				method: 'get',
				responseType: 'json'
			};

			axios(itemsOption).then((response) => {
				let error = response.data[0]['error'];
				if (error !== 'no') {
					showError(error);
				}
				else {
					let total = response.data[1]['total'];
					if (total === 0) {
						setItems([]);
					}
					else {
						let fetchedItems = [...response.data];
						fetchedItems.splice(0, 2);
						setItems(fetchedItems);
					}
				}
			}).catch((error) => {
				showError();
			});
		}
	}, [orderid]);

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

						<div className="mb-3">
							<Link to="/orders" className="btn btn-secondary">
								<i className="align-middle me-1" data-feather="arrow-left" /> Back to Orders
							</Link>
						</div>

						<h1 className="h3 mb-3">Order Details</h1>

						{order ? (
							<div className="row">
								<div className="col-12">
									<div className="card">
										<div className="card-header">
											<h4 className="card-title mb-0 text-dark">
												<span className="text-bg-primary p-1">Summary</span> - Order ID: <span>{orderid}</span>
											</h4>
										</div>
										<div className="card-body">
											{/* Order Metadata Fields */}
											<div className="row mb-4">
												<div className="col-md-4 mb-3">
													<span className="text-muted d-block small">Order ID</span>
													<strong className="text-dark">{orderid}</strong>
												</div>
												<div className="col-md-4 mb-3">
													<span className="text-muted d-block small">Order Date</span>
													<strong className="text-dark">{order.billdate}</strong>
												</div>
												<div className="col-md-4 mb-3">
													<span className="text-muted d-block small">Customer Name</span>
													<strong className="text-dark">{order.fullname}</strong>
												</div>
											</div>

											<div className="row mb-4">
												<div className="col-md-6 mb-3">
													<span className="text-muted d-block small">Address 1</span>
													<span className="text-dark">{order.address1}</span>
												</div>
												<div className="col-md-6 mb-3">
													<span className="text-muted d-block small">Address 2</span>
													<span className="text-dark">{order.address2}</span>
												</div>
											</div>

											<div className="row mb-4">
												<div className="col-md-4 mb-3">
													<span className="text-muted d-block small">City</span>
													<span className="text-dark">{order.city}</span>
												</div>
												<div className="col-md-4 mb-3">
													<span className="text-muted d-block small">Pincode</span>
													<span className="text-dark">{order.pincode}</span>
												</div>
												<div className="col-md-4 mb-3">
													<span className="text-muted d-block small">Remarks</span>
													<span className="text-dark italic">{order.remarks}</span>
												</div>
											</div>

											<div className="row mb-4">
												<div className="col-md-4 mb-3">
													<span className="text-muted d-block small">Payment Mode</span>
													<span className="badge bg-secondary py-1 px-2">{getPaymentMode(order.paymentmode)}</span>
												</div>
												<div className="col-md-4 mb-3">
													<span className="text-muted d-block small">Payment Status</span>
													{getPaymentStatusBadge(order.paymentstatus)}
												</div>
												<div className="col-md-4 mb-3">
													<span className="text-muted d-block small">Order Status</span>
													{getOrderStatusBadge(order.orderstatus)}
												</div>
											</div>

											<hr className="my-4" />

											{/* Order Items Table */}
											<h4 className="text-dark mb-3">Order Items</h4>
											<div className="table-responsive">
												<table className="table table-striped table-hover">
													<thead>
														<tr>
															<th>Product ID</th>
															<th>Product Name</th>
															<th className="text-end">Price</th>
															<th className="text-center">Quantity</th>
															<th className="text-end">Total</th>
														</tr>
													</thead>
													<tbody>
														{items.map((item) => {
															const total = parseFloat(item.price) * parseInt(item.quantity);
															return (
																<tr key={item.id}>
																	<td>{item.id}</td>
																	<td>{item.title}</td>
																	<td className="text-end">{parseFloat(item.price).toLocaleString()}</td>
																	<td className="text-center">{item.quantity}</td>
																	<td className="text-end">{total.toLocaleString()}</td>
																</tr>
															);
														})}
														<tr className="fw-bold table-light">
															<td colSpan="4" className="text-end text-dark">Grand Total</td>
															<td className="text-end text-dark">{parseFloat(order.amount).toLocaleString()}</td>
														</tr>
													</tbody>
												</table>
											</div>

										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="text-center py-5">
								<div className="spinner-border text-primary" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
								<h4 className="mt-3">Loading order details...</h4>
							</div>
						)}

					</div>
				</main>

				<SiteFooter />
			</div>
		</div>
	);
}
