// Cart.js
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from "../styles/Cart.module.css";
import { Link } from "react-router-dom";
import Total from "./Total";
import Header from "./Header";
import CheckoutButton from "./CheckoutButton";

function Cart() {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Shipping fee and calculation of subTotal and totalPrice
  const shippingFee = 80;
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalPrice = subTotal + shippingFee;

  // Check if the cart is empty
  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        {/* Display a message for an empty cart */}
        <div className={styles.emptyCartContainer}>
          <p>No items in cart.</p>
          <Link to="/">
            <button className={styles.addProductsButton}>Add Products</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      {/* Display cart items */}
      {cartItems.map((item, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "18px",
          }}
          key={index}>
          <CartItem
            id={item.id}
            imagePath={item.imagePath}
            imageName={item.imageName}
            itemName={item.name}
            itemPrice={item.price}
            quantity={item.quantity}
            size={item.size}
          />
        </div>
      ))}

      {/* Voucher code input field */}
      <div className={styles.voucherConatiner}>
        <div className={styles.voucherField}>
          <div>Voucher Code</div>
        </div>
      </div>

      {/* Display total and checkout button */}
      <Total
        subTotal={subTotal}
        shippingFee={shippingFee}
        totalPrice={totalPrice}
      />
      <CheckoutButton />
    </>
  );
}

export default Cart;
