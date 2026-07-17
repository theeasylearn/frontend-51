import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import SiteFooter from './site_footer';

const mockOrders = {
	"46": {
		id: "46",
		date: "22-06-2026",
		name: "ff",
		address1: "f",
		address2: "tr",
		city: "dr",
		pincode: "222255",
		remarks: "Please pack with extra protection.",
		paymentMode: "Credit Card",
		paymentStatus: "Paid",
		paymentStatusClass: "bg-success",
		orderStatus: "Pending",
		orderStatusClass: "bg-warning",
		items: [
			{ productId: "101", name: "Premium Smartphone 5G", price: 125000, qty: 1 }
		]
	},
	"45": {
		id: "45",
		date: "24-04-2026",
		name: "dharm",
		address1: "anand",
		address2: "1",
		city: "anand",
		pincode: "364715",
		remarks: "Leave at front desk.",
		paymentMode: "UPI",
		paymentStatus: "Paid",
		paymentStatusClass: "bg-success",
		orderStatus: "Pending",
		orderStatusClass: "bg-warning",
		items: [
			{ productId: "102", name: "Professional Laptop Core i7", price: 125100, qty: 1 }
		]
	},
	"42": {
		id: "42",
		date: "17-04-2026",
		name: "ankit_patel",
		address1: "eva_surbhi",
		address2: "opp_akshwarwadi_temple",
		city: "bhavnagar",
		pincode: "364001",
		remarks: "Call before delivery.",
		paymentMode: "Cash on Delivery",
		paymentStatus: "Unpaid",
		paymentStatusClass: "bg-warning",
		orderStatus: "Pending",
		orderStatusClass: "bg-warning",
		items: [
			{ productId: "105", name: "Wired Optical Mouse", price: 300, qty: 1 },
			{ productId: "106", name: "USB Keyboard", price: 1000, qty: 1 }
		]
	},
	"21": {
		id: "21",
		date: "31-12-2024",
		name: "Darrel",
		address1: "58 Clarendon Extension",
		address2: "Fugiat id sit verita",
		city: "Maxime neque non sim",
		pincode: "382010",
		remarks: "Cancellation requested by client.",
		paymentMode: "Credit Card",
		paymentStatus: "Refunded",
		paymentStatusClass: "bg-info",
		orderStatus: "Cancelled",
		orderStatusClass: "bg-danger",
		items: [
			{ productId: "107", name: "Ergonomic Office Desk Chair", price: 125200, qty: 1 }
		]
	},
	"8": {
		id: "8",
		date: "01-10-2024",
		name: "Ankit",
		address1: "105 eva surbhi, opp aksharwadi",
		address2: "hill drive",
		city: "bhavnagar",
		pincode: "364002",
		remarks: "Deliver on weekend if possible.",
		paymentMode: "Net Banking",
		paymentStatus: "Paid",
		paymentStatusClass: "bg-success",
		orderStatus: "Shipped",
		orderStatusClass: "bg-primary",
		items: [
			{ productId: "108", name: "Bluetooth Speaker 20W", price: 1767, qty: 1 }
		]
	}
};

export default function OrderDetail() {
	const [orderId, setOrderId] = useState('');
	const [order, setOrder] = useState(null);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const id = params.get('id') || "46";
		const ord = mockOrders[id] || mockOrders["46"];
		setOrderId(id);
		setOrder(ord);
	}, []);

	if (!order) {
		return <div>Loading order details...</div>;
	}

	const grandTotal = order.items.reduce((sum, item) => sum + (item.price * item.qty), 0);

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

						<div className="mb-3">
							<Link to="/orders" className="btn btn-secondary">
								<i className="align-middle me-1" data-feather="arrow-left" /> Back to Orders
							</Link>
						</div>

						<h1 className="h3 mb-3">Order Details</h1>

						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title mb-0 text-dark">
											<span className="text-bg-primary p-1">Summary</span> - Order ID: <span>{order.id}</span>
										</h4>
									</div>
									<div className="card-body">
										{/* Order Metadata Fields */}
										<div className="row mb-4">
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Order ID</span>
												<strong className="text-dark">{order.id}</strong>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Order Date</span>
												<strong className="text-dark">{order.date}</strong>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Customer Name</span>
												<strong className="text-dark">{order.name}</strong>
											</div>
										</div>

										<div className="row mb-4">
											<div className="col-md-6 mb-3">
												<span className="text-muted d-block small">Address 1</span>
												<span className="text-dark">{order.address1}</span>
											</div>
											<div className="col-md-6 mb-3">
												<span className="text-muted d-block small">Address 2</span>
												<span className="text-dark">{order.address2}</span>
											</div>
										</div>

										<div className="row mb-4">
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">City</span>
												<span className="text-dark">{order.city}</span>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Pincode</span>
												<span className="text-dark">{order.pincode}</span>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Remarks</span>
												<span className="text-dark italic">{order.remarks}</span>
											</div>
										</div>

										<div className="row mb-4">
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Payment Mode</span>
												<span className="badge bg-secondary py-1 px-2">{order.paymentMode}</span>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Payment Status</span>
												<span className={`badge py-1 px-2 ${order.paymentStatusClass}`}>{order.paymentStatus}</span>
											</div>
											<div className="col-md-4 mb-3">
												<span className="text-muted d-block small">Order Status</span>
												<span className={`badge py-1 px-2 ${order.orderStatusClass}`}>{order.orderStatus}</span>
											</div>
										</div>

										<hr className="my-4" />

										{/* Order Items Table */}
										<h4 className="text-dark mb-3">Order Items</h4>
										<div className="table-responsive">
											<table className="table table-striped table-hover">
												<thead>
													<tr>
														<th>Product ID</th>
														<th>Product Name</th>
														<th className="text-end">Price</th>
														<th className="text-center">Quantity</th>
														<th className="text-end">Total</th>
													</tr>
												</thead>
												<tbody>
													{order.items.map((item, index) => {
														const itemTotal = item.price * item.qty;
														return (
															<tr key={index}>
																<td>{item.productId}</td>
																<td>{item.name}</td>
																<td className="text-end">${item.price.toLocaleString()}</td>
																<td className="text-center">{item.qty}</td>
																<td className="text-end">${itemTotal.toLocaleString()}</td>
															</tr>
														);
													})}
													<tr className="fw-bold table-light">
														<td colSpan="4" className="text-end text-dark">Grand Total</td>
														<td className="text-end text-dark">${grandTotal.toLocaleString()}</td>
													</tr>
												</tbody>
											</table>
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
