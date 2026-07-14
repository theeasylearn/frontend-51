import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
export default class Product extends React.Component {
	componentDidMount() {
		if (window.Fancybox) {
			window.Fancybox.bind("[data-fancybox]", {
				animated: true,
				dragToClose: true,
				Toolbar: {
					display: {
						left: [],
						middle: [],
						right: ["zoomIn", "zoomOut", "toggle1to1", "fullscreen", "close"]
					}
				}
			});
		}
	}

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
										<div className="card-header d-flex justify-content-between align-items-center">
											<h4 className="card-title mb-0 text-dark">
												<span className="text-bg-primary p-1">Existing Products</span> - Product management
											</h4>
											<Link to="/add-product" className="btn btn-sm btn-success">Add Product</Link>
										</div>
										<div className="card-body">
											<table className="table table-striped table-hover">
												<thead>
													<tr>
														<th>ID</th>
														<th>Category ID</th>
														<th>Title</th>
														<th>Price</th>
														<th>Stock</th>
														<th>Weight</th>
														<th>Size</th>
														<th>Photo</th>
														<th>Detail</th>
														<th>Is Live</th>
														<th>Actions</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>10</td>
														<td>Smartphone</td>
														<td>$999</td>
														<td>15</td>
														<td>180g</td>
														<td>6.1 inch</td>
														<td>
															<a data-fancybox="gallery" href="https://picsum.photos/id/1025/1200/800">
																<img src="https://picsum.photos/50" className="img-fluid rounded" alt="Product" />
															</a>
														</td>
														<td>Latest flagship phone</td>
														<td>Yes</td>
														<td>
															<Link to="/edit-product" className="btn btn-sm btn-primary">Edit</Link>
															<button className="btn btn-sm btn-danger">Delete</button>
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
