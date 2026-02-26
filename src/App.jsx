import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Cart from "./Pages/cart/Cart";
import PlaceOrder from "./Pages/placeOrder/PlaceOrder";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
				<Route path="/placeOrder" element={<PlaceOrder />}></Route>
			</Routes>
		</div>
	);
};

export default App;
