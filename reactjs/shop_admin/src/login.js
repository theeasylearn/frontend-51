import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBaseUrl } from './common';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from './message';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	let navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
	let doLogin = (e) => {
		e.preventDefault();
		let apiAddress = getBaseUrl() + "admin_login.php";
		let form = new FormData();
		form.append("email", email);
		form.append("password", password);
		console.log(form);
		let option = {
			url: apiAddress,
			method: "post",
			responseType: "json",
			data: form
		};

		axios(option).then((response) => {
			console.log(response.data);
			let error = response.data[0]['error'];
			if (error !== "no") {
				showError(error);
			}
			else {
				let success = response.data[1]['success'];
				if (success === 'no') {
					showError(response.data[2]['message']);
				}
				else {
					showMessage(response.data[2]['message']);
					setCookie("userid",response.data[3]['id']);
					console.log(cookies['userid'])
					setTimeout(() => {
						navigate('/dashboard');
					}, 2000);
				}
			}
		}).catch((error) => {
			showError();
		});
	};

	return (
		<main className="d-flex w-100 h-100">
			<div className="container d-flex flex-column">
				<ToastContainer limit={1} />
				<div className="row vh-100">
					<div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
						<div className="d-table-cell align-middle">
							<div className="card">
								<div className="card-body">
									<div className="m-sm-3">
										<div className="row">
											<div className="col">
												<hr />
											</div>
											<div className="col-auto text-uppercase d-flex align-items-center h2">Admin Login</div>
											<div className="col">
												<hr />
											</div>
										</div>
										<form method='post' onSubmit={doLogin}>
											<div className="mb-3">
												<label className="form-label">Email</label>
												<input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}
													value={email} />
											</div>
											<div className="mb-3">
												<label className="form-label">Password</label>
												<input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
												<small>
													<Link to="/forgot-password">Forgot password?</Link>
												</small>
											</div>
											<div className="d-grid gap-2 mt-3">
												<button type="submit" className="btn btn-lg btn-primary">Sign in</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
