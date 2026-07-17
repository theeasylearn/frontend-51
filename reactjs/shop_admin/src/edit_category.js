import React, { useEffect } from 'react';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';

export default function EditCategory() {
	useEffect(() => {
		const timer = setTimeout(() => {
			if (localStorage.getItem('popState') !== 'shown' && window.notyf) {
				window.notyf.open({
					type: "success",
					message: "Get access to all 500+ components and 45+ pages with AdminKit PRO. <u><a class=\"text-white\" href=\"https://adminkit.io/pricing\" target=\"_blank\">More info</a></u> 🚀",
					duration: 10000,
					ripple: true,
					dismissible: false,
					position: {
						x: "left",
						y: "bottom"
					}
				});
				localStorage.setItem('popState', 'shown');
			}
		}, 15000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

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
						<h1 className="h3 mb-3" />
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title mb-0 text-dark">
											<span className="text-bg-primary p-1">Edit category</span> - Category management
										</h4>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-md-9">
												<form method="post">
													<div className="mb-3">
														<label htmlFor="title" className="form-label">Edit Title</label>
														<input type="text" className="form-control" id="title" name="title" required />
													</div>
													<div className="mb-3">
														<label htmlFor="photo" className="form-label">Change Photo</label>
														<input type="file" className="form-control" id="photo" name="photo" required />
													</div>
													{/* need radio buttons for is_live */}
													<div className="mb-3">
														<label className="form-label">Is Live?</label>
														<div>
															<input className="form-check-input" type="radio" name="is_live" id="yes" defaultValue="1" required />
															<label className="form-check-label" htmlFor="yes">Yes</label>
														</div>
														<div>
															<input className="form-check-input" type="radio" name="is_live" id="no" defaultValue="0" required />
															<label className="form-check-label" htmlFor="no">No</label>
														</div>
													</div>
													<button type="submit" className="btn btn-primary">Save changes</button>
													<button type="reset" className="btn btn-secondary">Clear all</button>
												</form>
											</div>
											<div className="col-md-3">
												<h4 className="mb-3">Existing Photo</h4>
												<img src="http://picsum.photos/200" className="img-fluid rounded" alt="Category" />
											</div>
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
