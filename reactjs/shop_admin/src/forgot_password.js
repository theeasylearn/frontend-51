import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from './message';
import { useState } from 'react';
import {getBaseUrl} from './common';
import axios from 'axios';
export default function ForgotPassword() {
	let [email,setEmail] = useState("");
	let doSendMail = (e) => {
		e.preventDefault();
		let apiAddress = getBaseUrl() + "forgot_password.php";
		let form = new FormData();
		form.append("email", email);
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
				}
			}
		}).catch((error) => {
			showError();
		});
	}
		return (
			<main className="d-flex w-100 h-100">
				<ToastContainer limit={1} />
				<div className="container d-flex flex-column">
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
												<div className="col-auto text-uppercase d-flex align-items-center h3">Recover Account - Admin</div>
												<div className="col">
													<hr />
												</div>
											</div>
											<form onSubmit={doSendMail}>
												<div className="mb-3">
													<label className="form-label">Email</label>
													<input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
												</div>
												<div className="d-grid gap-2 mt-3">
													<button type="submit" className="btn btn-lg btn-warning">Send email</button>
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
