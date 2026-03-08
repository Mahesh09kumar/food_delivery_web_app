import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
	const { cartItem, food_list, removeFromCart } = useContext(StoreContext);

	return (
		<div>
			<h2>Your Cart</h2>

			{food_list.map((item) => {
				if (cartItem[item._id] > 0) {
					return (
						<div key={item._id}>
							<p>{item.name}</p>
							<p>Qty: {cartItem[item._id]}</p>
							<button onClick={() => removeFromCart(item._id)}>
								Remove
							</button>
						</div>
					);
				}
				return null;
			})}
		</div>
	);
};

export default Cart;
