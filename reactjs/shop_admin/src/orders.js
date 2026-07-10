import React from 'react';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';

export default class Orders extends React.Component {
	render() {
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
													<tr>
														<td>46</td>
														<td>22-06-2026</td>
														<td>ff</td>
														<td>f, tr, dr - 222255</td>
														<td>$125,000</td>
														<td><span className="badge bg-warning">Pending</span></td>
														<td>
															<a href="site_order_detail.html?id=46" className="btn btn-sm btn-primary">
																<i className="align-middle" data-feather="eye" /> View Detail
															</a>
														</td>
													</tr>
													<tr>
														<td>45</td>
														<td>24-04-2026</td>
														<td>dharm</td>
														<td>anand, 1, anand - 364715</td>
														<td>$125,100</td>
														<td><span className="badge bg-warning">Pending</span></td>
														<td>
															<a href="site_order_detail.html?id=45" className="btn btn-sm btn-primary">
																<i className="align-middle" data-feather="eye" /> View Detail
															</a>
														</td>
													</tr>
													<tr>
														<td>42</td>
														<td>17-04-2026</td>
														<td>ankit_patel</td>
														<td>eva_surbhi, opp_akshwarwadi_temple, bhavnagar - 364001</td>
														<td>$1,300</td>
														<td><span className="badge bg-warning">Pending</span></td>
														<td>
															<a href="site_order_detail.html?id=42" className="btn btn-sm btn-primary">
																<i className="align-middle" data-feather="eye" /> View Detail
															</a>
														</td>
													</tr>
													<tr>
														<td>21</td>
														<td>31-12-2024</td>
														<td>Darrel</td>
														<td>58 Clarendon Extension, Fugiat id sit verita, Maxime neque non sim</td>
														<td>$125,200</td>
														<td><span className="badge bg-danger">Cancelled</span></td>
														<td>
															<a href="site_order_detail.html?id=21" className="btn btn-sm btn-primary">
																<i className="align-middle" data-feather="eye" /> View Detail
															</a>
														</td>
													</tr>
													<tr>
														<td>8</td>
														<td>01-10-2024</td>
														<td>Ankit</td>
														<td>105 eva surbhi, hill drive, bhavnagar</td>
														<td>$1,767</td>
														<td><span className="badge bg-primary">Shipped</span></td>
														<td>
															<a href="site_order_detail.html?id=8" className="btn btn-sm btn-primary">
																<i className="align-middle" data-feather="eye" /> View Detail
															</a>
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
