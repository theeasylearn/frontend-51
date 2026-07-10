import React from 'react';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
export default class Users extends React.Component {
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

							<h1 className="h3 mb-3">Users Directory</h1>

							<div className="row">
								<div className="col-12">
									<div className="card">
										<div className="card-header">
											<h4 className="card-title mb-0 text-dark">
												<span className="text-bg-primary p-1">Registered Users</span> - User management
											</h4>
										</div>
										<div className="card-body">
											<table className="table table-striped table-hover">
												<thead>
													<tr>
														<th>ID</th>
														<th>Email Address</th>
														<th>Mobile Number</th>
														<th>Actions</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>3</td>
														<td>ankit3385@gmail.com</td>
														<td>1234567890</td>
														<td>
															<a href="site_send-email.html?email=ankit3385@gmail.com" className="btn btn-sm btn-info text-white">
																<i className="align-middle me-1" data-feather="mail" /> Send Email
															</a>
															<button className="btn btn-sm btn-secondary">
																<i className="align-middle me-1" data-feather="clock" /> View History
															</button>
														</td>
													</tr>
													<tr>
														<td>4</td>
														<td>ankit3395@gmail.com</td>
														<td>1234567891</td>
														<td>
															<a href="site_send-email.html?email=ankit3395@gmail.com" className="btn btn-sm btn-info text-white">
																<i className="align-middle me-1" data-feather="mail" /> Send Email
															</a>
															<button className="btn btn-sm btn-secondary">
																<i className="align-middle me-1" data-feather="clock" /> View History
															</button>
														</td>
													</tr>
													<tr>
														<td>5</td>
														<td>ankit33855@gmail.com</td>
														<td>1234567895</td>
														<td>
															<a href="site_send-email.html?email=ankit33855@gmail.com" className="btn btn-sm btn-info text-white">
																<i className="align-middle me-1" data-feather="mail" /> Send Email
															</a>
															<button className="btn btn-sm btn-secondary">
																<i className="align-middle me-1" data-feather="clock" /> View History
															</button>
														</td>
													</tr>
													<tr>
														<td>6</td>
														<td>dibynyjuc@mailinator.com</td>
														<td>+1 (665) 326-9563</td>
														<td>
															<a href="site_send-email.html?email=dibynyjuc@mailinator.com" className="btn btn-sm btn-info text-white">
																<i className="align-middle me-1" data-feather="mail" /> Send Email
															</a>
															<button className="btn btn-sm btn-secondary">
																<i className="align-middle me-1" data-feather="clock" /> View History
															</button>
														</td>
													</tr>
													<tr>
														<td>7</td>
														<td>ram@gmail.com</td>
														<td>+1 (762) 436-8979</td>
														<td>
															<a href="site_send-email.html?email=ram@gmail.com" className="btn btn-sm btn-info text-white">
																<i className="align-middle me-1" data-feather="mail" /> Send Email
															</a>
															<button className="btn btn-sm btn-secondary">
																<i className="align-middle me-1" data-feather="clock" /> View History
															</button>
														</td>
													</tr>
													<tr>
														<td>8</td>
														<td>vybiqiweby@mailinator.com</td>
														<td>+1 (627) 649-4204</td>
														<td>
															<a href="site_send-email.html?email=vybiqiweby@mailinator.com" className="btn btn-sm btn-info text-white">
																<i className="align-middle me-1" data-feather="mail" /> Send Email
															</a>
															<button className="btn btn-sm btn-secondary">
																<i className="align-middle me-1" data-feather="clock" /> View History
															</button>
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
