import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Cart from "./Pages/cart/Cart";
import PlaceOrder from "./Pages/placeOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
	const [showLogin, setShowLogin] = useState(false);
	return (
		<>
			{showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
			<div className="app">
				<Navbar setShowLogin={setShowLogin} />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
					<Route path="/placeOrder" element={<PlaceOrder />}></Route>
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default App;
