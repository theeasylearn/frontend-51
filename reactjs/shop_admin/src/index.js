import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AddCategory from './add_category';
import AddProduct from './add_product';
import Category from './category';
import Dashboard from './dashboard';
import EditCategory from './edit_category';
import EditProduct from './edit_product';
import ForgotPassword from './forgot_password';
import Login from './login';
import OrderDetail from './order_detail';
import Orders from './orders';
import Product from './product';
import SendEmail from './send_email';
import Template from './template';
import Users from './users';
import { CookiesProvider } from 'react-cookie';
function MyRouter() {
	return (
		<CookiesProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/add-category" element={<AddCategory />} />
					<Route path="/add-product" element={<AddProduct />} />
					<Route path="/category" element={<Category />} />
					<Route path="/edit-category" element={<EditCategory />} />
					<Route path="/edit-product/:productid" element={<EditProduct />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/login" element={<Login />} />
					<Route path={"/order-detail/:orderid"} element={<OrderDetail />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/product" element={<Product />} />
					<Route path="/send-email" element={<SendEmail />} />
					<Route path="/template" element={<Template />} />
					<Route path="/users" element={<Users />} />
				</Routes>
			</BrowserRouter>
		</CookiesProvider>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);
