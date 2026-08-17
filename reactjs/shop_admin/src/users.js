import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
import { getBaseUrl } from './common';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from './message';
import useVerifyLogin from './verify-login';
export default function Users() {
	const [users, setUsers] = useState([]);
	useVerifyLogin();
	useEffect(() => {
		if (users.length == 0) {
			let apiAddress = getBaseUrl() + "users.php";
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
						alert("users not found");
					}
					else {
						showMessage();
						response.data.splice(0, 2);
						setUsers(response.data);
					}
				}
			}).catch((error) => {
				showError();
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
												{users.map((item) => {
													return (
														<tr key={item.id}>
															<td>{item.id}</td>
															<td>{item.email}</td>
															<td>{item.mobile}</td>
															<td>
																<Link to={`/send-email?email=${item.email}`} className="btn btn-sm btn-info text-white">
																	<i className="align-middle me-1" data-feather="mail" /> Send Email
																</Link>
																<button className="btn btn-sm btn-secondary">
																	<i className="align-middle me-1" data-feather="clock" /> View History
																</button>
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
