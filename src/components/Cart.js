// Cart.js
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from "../styles/Cart.module.css";
import { Link } from "react-router-dom";
import Total from "./Total";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCartContainer}>
        <p>No items in cart.</p>
        <Link to="/">
          <button className={styles.addProductsButton}>Add Products</button>
        </Link>
      </div>
    );
  }
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
          />
        </div>
      ))}
      <div className={styles.voucherConatiner}>
        <div className={styles.voucherField}>
          <div>Voucher Code</div>
        </div>
      </div>
      <Total />
    </>
  );
}

export default Cart;
