import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
import { getBaseUrl, getImageBase } from './common';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from './message';
export default function Product() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		if (products.length == 0) {
			let apiAddress = getBaseUrl() + "product.php";
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
						alert("product not found");
					}
					else {
						showMessage();
						response.data.splice(0, 2);
						setProducts(response.data);
					}
				}
			}).catch((error) => {
				showError();
			});
		}
	});

	useEffect(() => {
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
	}, [products]);

	let deleteProduct = (productid) => {
		// api call 
		let apiAddress = getBaseUrl() + "delete_product.php?id=" + productid;
		//alert(apiAddress);
		let option = {
			url:apiAddress,
			method:'get',
			responseType:'json'
		}
		axios(option).then((response) =>{
			console.log(response.data);
			let error = response.data[0]['error'];
			if(error !== 'no')
			{
				showError(error);
			}
			else 
			{
				
				//remove product in state array
				let temp = products.filter((item) => {
					if(item.id !== productid)
						return item		
				});
				//store filtered data into temp 
				setProducts(temp);
				showMessage(response.data[1]['message']);
			}
		}).catch((error) => {
			showError();
		});
	}
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
												{products.map((item) => {
													return (
														<tr key={item.id}>
															<td>{item.id}</td>
															<td>{item.categoryid}</td>
															<td>{item.title}</td>
															<td>${parseFloat(item.price).toLocaleString()}</td>
															<td>{item.stock}</td>
															<td>{item.weight}</td>
															<td>{item.size}</td>
															<td>
																<a data-fancybox="gallery" href={getImageBase() + "product/" + item.photo}>
																	<img src={getImageBase() + "product/" + item.photo} className="img-fluid rounded" alt="Product" style={{ width: 50, height: 50, objectFit: "cover" }} />
																</a>
															</td>
															<td>{item.detail}</td>
															<td>{item.islive === "1" ? "Yes" : "No"}</td>
															<td>
																<Link to={"/edit-product/" + item.id} className="btn btn-sm btn-primary">Edit</Link>
																<button onClick={()=> deleteProduct(item.id)} className="btn btn-sm btn-danger">Delete</button>
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
