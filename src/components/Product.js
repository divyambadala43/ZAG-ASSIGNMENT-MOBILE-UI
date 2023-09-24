import React from "react";
import styles from "../styles/Product.module.css";

const Product = ({ name, price, imagePath, imageName }) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src={imagePath} alt={imageName} />
      </div>
      <div>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productPrice}>INR {price}</div>
      </div>
    </>
  );
};

export default Product;
