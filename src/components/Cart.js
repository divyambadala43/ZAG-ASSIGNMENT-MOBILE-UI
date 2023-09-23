// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProductFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/slices/cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeProductFromCart(itemId));
  };
  const handleDecreaseQuantity = (itemId, quantity) => {
    if (quantity === 1) {
      dispatch(removeProductFromCart(itemId));
    } else {
      dispatch(decreaseQuantity(itemId));
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  return (
    <>
      {cartItems.map((item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "18px",
          }}
          key={item.id}>
          <CartItem
            id={item.id}
            imagePath={item.imagePath}
            imageName={item.imageName}
            itemName={item.name}
            itemPrice={item.price}
            quantity={item.quantity}
            handleRemoveItem={handleRemoveItem}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
          />
        </div>
      ))}
    </>
  );
}

export default Cart;
