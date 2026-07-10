import React from 'react';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';

export default class EditProduct extends React.Component {
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
							<h1 className="h3 mb-3" />

							<div className="row">
								<div className="col-12">
									<div className="card">
										<div className="card-header">
											<h4 className="card-title mb-0 text-dark">
												<span className="text-bg-primary p-1">Edit product</span> - Product management
											</h4>
										</div>
										<div className="card-body">
											<div className="row">
												<div className="col-md-9">
													<form method="post">
														<div className="row g-3">
															<div className="col-md-4 col-sm-6 col-12">
																<label htmlFor="category_id" className="form-label">Category ID</label>
																<input type="number" className="form-control" id="category_id" name="category_id" defaultValue="10" required />
															</div>
															<div className="col-md-4 col-sm-6 col-12">
																<label htmlFor="title" className="form-label">Edit Title</label>
																<input type="text" className="form-control" id="title" name="title" defaultValue="Smartphone" required />
															</div>
															<div className="col-md-4 col-sm-6 col-12">
																<label htmlFor="price" className="form-label">Price</label>
																<input type="number" step="0.01" className="form-control" id="price" name="price" defaultValue="999" required />
															</div>

															<div className="col-md-4 col-sm-6 col-12">
																<label htmlFor="stock" className="form-label">Stock</label>
																<input type="number" className="form-control" id="stock" name="stock" defaultValue="15" required />
															</div>
															<div className="col-md-4 col-sm-6 col-12">
																<label htmlFor="weight" className="form-label">Weight</label>
																<input type="number" step="0.01" className="form-control" id="weight" name="weight" defaultValue="180" required />
															</div>
															<div className="col-md-4 col-sm-6 col-12">
																<label htmlFor="size" className="form-label">Size</label>
																<input type="text" className="form-control" id="size" name="size" defaultValue="6.1 inch" required />
															</div>

															<div className="col-md-4 col-sm-6 col-12">
																<label htmlFor="photo" className="form-label">Change Photo</label>
																<input type="file" className="form-control" id="photo" name="photo" required />
															</div>
															<div className="col-md-4 col-sm-6 col-12">
																<label htmlFor="detail" className="form-label">Detail</label>
																<textarea className="form-control" id="detail" name="detail" rows={4} required defaultValue="Latest flagship phone" />
															</div>
															<div className="col-md-4 col-sm-6 col-12">
																<label className="form-label">Is Live?</label>
																<div className="form-check">
																	<input className="form-check-input" type="radio" name="is_live" id="yes" defaultValue="1" defaultChecked required />
																	<label className="form-check-label" htmlFor="yes">Yes</label>
																</div>
																<div className="form-check">
																	<input className="form-check-input" type="radio" name="is_live" id="no" defaultValue="0" required />
																	<label className="form-check-label" htmlFor="no">No</label>
																</div>
															</div>
														</div>
														<div className="mt-4">
															<button type="submit" className="btn btn-primary">Save changes</button>
															<button type="reset" className="btn btn-secondary">Clear all</button>
														</div>
													</form>
												</div>
												<div className="col-md-3">
													<h4 className="mb-3">Existing Photo</h4>
													<img src="https://picsum.photos/200" className="img-fluid rounded" alt="Product" />
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
}
