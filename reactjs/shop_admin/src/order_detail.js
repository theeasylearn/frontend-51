import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
export default function OrderDetail() {
	const { orderid } = useParams();
	const [order, setOrder] = useState(null);
	// useEffect(() => {
	// 	console.log(orderid);
	// });
	return (
		<div className="wrapper">
			<Sidebar />
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

						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title mb-0 text-dark">
											<span className="text-bg-primary p-1">Summary</span> - Order ID: <span>{order.id}</span>
										</h4>
									</div>
									<div className="card-body">
										{/* Order Metadata Fields */}
										<div className="row mb-4">
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Order ID</span>
												<strong className="text-dark">{order.id}</strong>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Order Date</span>
												<strong className="text-dark">{order.date}</strong>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Customer Name</span>
												<strong className="text-dark">{order.name}</strong>
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
												<span className="badge bg-secondary py-1 px-2">{order.paymentMode}</span>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Payment Status</span>
												<span className={`badge py-1 px-2 ${order.paymentStatusClass}`}>{order.paymentStatus}</span>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Order Status</span>
												<span className={`badge py-1 px-2 ${order.orderStatusClass}`}>{order.orderStatus}</span>
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

													<tr className="fw-bold table-light">
														<td colSpan="4" className="text-end text-dark">Grand Total</td>
														<td className="text-end text-dark"></td>
													</tr>
												</tbody>
											</table>
										</div>

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
