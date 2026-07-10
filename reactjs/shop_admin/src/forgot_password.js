import React from 'react';

export default class ForgotPassword extends React.Component {
	render() {
		return (
			<main className="d-flex w-100 h-100">
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
											<form>
												<div className="mb-3">
													<label className="form-label">Email</label>
													<input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
												</div>
												<div className="d-grid gap-2 mt-3">
													<button type="submit" className="btn btn-lg btn-warning" href="index.html">Send email</button>
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
}
