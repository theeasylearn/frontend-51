import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';
import Shop from './shop';
import Product from './product';
import ProductDetail from './productdetail';
import Cart from './cart';
import Checkout from './checkout';
import Login from './login';
import Register from './register';
import ChangePassword from './changepassword';
import ForgotPassword from './forgotpassword';
import Profile from './profile';
import Order from './order';
import AddProduct from './addproduct';
import EditProduct from './editproduct';
import { CookiesProvider } from 'react-cookie';
import Logout from './logout';
function MyRouter() {
    return (
        <CookiesProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:categoryid" element={<Product />} />
                    <Route path="/product-detail/:productid" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/changepassword" element={<ChangePassword />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="/editproduct" element={<EditProduct />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);
