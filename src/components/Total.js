import React from "react";
import styles from "../styles/Cart.module.css";

const Total = ({ subTotal, totalPrice, shippingFee }) => {
  return (
    <div>
      <div className={styles.totalContainer}>
        <div className={styles.priceInfo}>
          <div className={styles.amountType}>Sub Total</div>
          <div className={styles.price}>{subTotal}</div>
        </div>
        <div className={styles.priceInfo}>
          <div className={styles.amountType}>VAT (%)</div>
          <div className={styles.price}>INR 0.00</div>
        </div>
        <div className={styles.priceInfo}>
          <div className={styles.amountType}>Shipping fee</div>
          <div className={styles.price}>{shippingFee}</div>
        </div>
      </div>
      <hr style={{ width: "342px", height: "1px" }} />
      <div className={styles.totalPriceContainer}>
        <div className={styles.totalPriceInfo}>
          <div className={styles.totalHeading}>Total</div>
          <div className={styles.totalPrice}>{totalPrice}</div>
        </div>
      </div>
      <hr style={{ height: "1px" }} />
    </div>
  );
};

export default Total;
