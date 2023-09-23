import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart, clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeProductFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} -
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
