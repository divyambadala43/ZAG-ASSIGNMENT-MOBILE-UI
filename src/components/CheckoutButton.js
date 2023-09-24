import React from "react";
import styles from "../styles/Cart.module.css";

const CheckoutButton = () => {
  return (
    <div className={styles.checkoutButtonContainer}>
      <div className={styles.checkoutButton}>
        <div>Checkout</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CheckoutButton;
