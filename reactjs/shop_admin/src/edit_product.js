import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';
import { data, useParams, useNavigate } from 'react-router-dom';
import { getBaseUrl, getImageBase } from './common';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from './message';

export default function EditProduct() {

	const { productid } = useParams();
	let navigate = useNavigate(); 
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [weight, setWeight] = useState('');
	const [size, setSize] = useState('');
	const [stock, setStock] = useState('');
	const [islive, setIslive] = useState(1);
	const [photo, setPhoto] = useState(null);
	const [oldPhoto, setOldPhoto] = useState('');
	const [detail, setDetail] = useState('');
	const [category, setCategory] = useState('');
	const [categories, setCategories] = useState([]);
	let fetchProduct = function () {
		const apiAddress = getBaseUrl() + "product.php?productid=" + productid;

		axios.get(apiAddress)
			.then((response) => {

				if (response.data[0].error !== "no") {
					showError(response.data[0].error);
					return;
				}

				if (response.data[1].total === 0) {
					showError("Product not found");
					return;
				}

				const product = response.data[2];

				setTitle(product.title);
				setPrice(product.price);
				setWeight(product.weight);
				setSize(product.size);
				setStock(product.stock);
				setCategory(product.categoryid);
				setDetail(product.detail);
				setIslive(Number(product.islive));
				setOldPhoto(product.photo);

			})
			.catch(() => {
				showError("Unable to fetch product.");
			});

	}

	let fetchCategories = function () {
		if (categories.length == 0) {
			let apiAddress = getBaseUrl() + "category.php";
			let option = {
				'url': apiAddress,
				'method': 'get',
				'responseType': 'json'
			};

			// Calling api 
			axios(option).then((response) => {
				// response.data property has actual response received from server
				console.log(response.data);
				/*
				[   
				0 {"error":"no"},
				1 {"total":6},
				2 {"id":"1","title":"laptop","photo":"laptop.jpg","islive":"1","isdeleted":"0"},
				3{"id":"2","title":"mobile","photo":"mobile.jpg","islive":"1","isdeleted":"0"},
				4{"id":"3","title":"book","photo":"books.jpg","islive":"1","isdeleted":"0"},
				5{"id":"4","title":"Cookies & waffers","photo":"Cookies.jpg","islive":"1","isdeleted":"0"},
				6{"id":"5","title":"Washing Powders","photo":"washing_powders.jpg","islive":"1","isdeleted":"0"},
				7{"id":"6","title":"shampoo","photo":"shampoo.jpg","islive":"1","isdeleted":"0"}] 
				*/
				let error = response.data[0]['error'];
				if (error != 'no') {
					alert(error);
				}
				else {
					//no error 
					let total = response.data[1]['total'];
					if (total === 0) {
						alert("category not found")
					}
					else {
						//call function
						showMessage();
						//there are few categories (total is not zero)
						//delete 2 object from beginning as it is not actual data
						response.data.splice(0, 2);
						//store remaining  categories into state array
						setCategories(response.data);
					}
				}
			}).catch((error) => {
				showError()
			});
		}
	}
	useEffect(() => {
		fetchProduct();
		fetchCategories();
	}, [productid]);


	let updateProduct = function(e) {
		console.log(title,price,stock,weight,size,detail,islive,photo,category);
		//api call 
		let apiAddress = getBaseUrl() + "update_product.php";
		let form = new FormData();
		form.append("name",title);
		form.append("photo",photo);
		form.append("price",price);
		form.append("stock",stock);
		form.append("detail",detail);
		form.append("productid",productid);
		form.append("categoryid",category);
		form.append("islive",islive);
		let option = {
			url:apiAddress,
			method:'post',
			responseType:'json',
			data:form
		};
		// api call 
		axios(option).then((response) => {
			console.log(response.data);
			let error = response.data[0]['error'];
			if(error !== 'no')
			{
				//there is error
				showError(error);
			}
			else 
			{
				//no error 
				let success = response.data[1]['success'];
				let message = response.data[2]['message'];
				if(success === 'no')
					showError(message);
				else 
				{
					//success yes
					showMessage(message);
					setTimeout(() => {
						//send user on another route 
						navigate("/product");
					},2000);
				}
			}
		}).catch((error) => {
			showError();
		});
		e.preventDefault();

	}
	return (
		<>
			<ToastContainer />

			<div className="wrapper">

				<Sidebar />

				<div className="main">

					<nav className="navbar navbar-expand navbar-light navbar-bg">
						<a className="sidebar-toggle js-sidebar-toggle">
							<i className="hamburger align-self-center"></i>
						</a>
					</nav>

					<main className="content">

						<div className="container-fluid p-0">

							<div className="card">

								<div className="card-header">
									<h4 className="card-title">
										<span className="badge bg-primary">
											Edit Product
										</span>
									</h4>
								</div>

								<div className="card-body">

									<div className="row">

										<div className="col-md-9">

											<form method='post' onSubmit={updateProduct}>

												<div className="row g-3">

													<div className="col-md-4">
														<label htmlFor="category_id" className="form-label">Category ID</label>
														<select className="form-select" id="category" name="category" required
															onChange={(e) => setCategory(e.target.value)} >
															<option value="">Select category</option>
															{categories.map((item) => {
																if (item.id === category) {
																	return (<option value={item.id} selected>{item.title}</option>)
																}
																else {
																	return (<option value={item.id}>{item.title}</option>)
																}
															})}
														</select>

													</div>

													<div className="col-md-4">
														<label>Title</label>
														<input
															type="text"
															className="form-control"
															value={title}
															onChange={(e) => setTitle(e.target.value)}
														/>
													</div>

													<div className="col-md-4">
														<label>Price</label>
														<input
															type="number"
															className="form-control"
															value={price}
															onChange={(e) => setPrice(e.target.value)}
														/>
													</div>

													<div className="col-md-4">
														<label>Stock</label>
														<input
															type="number"
															className="form-control"
															value={stock}
															onChange={(e) => setStock(e.target.value)}
														/>
													</div>

													<div className="col-md-4">
														<label>Weight</label>
														<input
															type="number"
															className="form-control"
															value={weight}
															onChange={(e) => setWeight(e.target.value)}
														/>
													</div>

													<div className="col-md-4">
														<label>Size</label>
														<input
															type="text"
															className="form-control"
															value={size}
															onChange={(e) => setSize(e.target.value)}
														/>
													</div>

													<div className="col-md-6">
														<label>Change Photo</label>
														<input
															type="file"
															className="form-control"
															onChange={(e) => setPhoto(e.target.files[0])}
														/>
													</div>

													<div className="col-md-6">
														<label>Detail</label>
														<textarea
															rows="4"
															className="form-control"
															value={detail}
															onChange={(e) => setDetail(e.target.value)}
														></textarea>
													</div>

													<div className="col-md-6">

														<label className="form-label">
															Is Live ?
														</label>

														<div className="form-check">

															<input
																className="form-check-input"
																type="radio"
																id="yes"
																name="islive"
																value="1"
																checked={islive === 1}
																onChange={() => setIslive(1)}
															/>

															<label
																className="form-check-label"
																htmlFor="yes"
															>
																Yes
															</label>

														</div>

														<div className="form-check">

															<input
																className="form-check-input"
																type="radio"
																id="no"
																name="islive"
																value="0"
																checked={islive === 0}
																onChange={() => setIslive(0)}
															/>

															<label
																className="form-check-label"
																htmlFor="no"
															>
																No
															</label>

														</div>

													</div>

												</div>

												<div className="mt-4">

													<button
														className="btn btn-primary me-2"
														type="submit"
													>
														Save Changes
													</button>

													<button
														className="btn btn-secondary"
														type="reset"
													>
														Reset
													</button>

												</div>

											</form>

										</div>

										<div className="col-md-3">

											<h5>Existing Photo</h5>

											<img
												src={getImageBase() + "product/" + oldPhoto}
												alt="Product"
												className="img-fluid rounded border"
											/>

										</div>

									</div>

								</div>

							</div>

						</div>

					</main>

					<SiteFooter />

				</div>

			</div>

		</>
	);

}