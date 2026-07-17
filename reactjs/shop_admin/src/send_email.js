import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';

export default function SendEmail() {
	const [email, setEmail] = useState('');

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const emailParam = params.get('email') || '';
		setEmail(emailParam);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Email has been queued for sending!');
	};

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

						<h1 className="h3 mb-3">Send Notification Email</h1>

						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title mb-0 text-dark">
											<span className="text-bg-primary p-1">Compose Email</span> - Communications
										</h4>
									</div>
									<div className="card-body">
										<form method="post" onSubmit={handleSubmit}>
											<div className="mb-3">
												<label htmlFor="email" className="form-label">Recipient Email</label>
												<input
													type="email"
													className="form-control"
													id="email"
													name="email"
													placeholder="recipient@example.com"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													required
												/>
											</div>
											<div className="mb-3">
												<label htmlFor="subject" className="form-label">Subject</label>
												<input type="text" className="form-control" id="subject" name="subject" placeholder="Enter subject header" required />
											</div>
											<div className="mb-3">
												<label htmlFor="message" className="form-label">Message Body</label>
												<textarea className="form-control" id="message" name="message" rows="6" placeholder="Type your message details here..." required></textarea>
											</div>
											<button type="submit" className="btn btn-primary">
												<i className="align-middle me-1" data-feather="send" /> Send Email
											</button>
											<button type="reset" className="btn btn-secondary" onClick={() => setEmail('')}>
												<i className="align-middle me-1" data-feather="rotate-ccw" /> Clear
											</button>
										</form>
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
