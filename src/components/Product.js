import React from "react";
import image1 from "../assets/image1.png";
import "../styles/styles.css";

const Product = () => {
  return (
    <div className="productContainer">
      <div>
        <img src={image1} alt="" />
      </div>
      <div>
        <div className="productName">Regular Fit Slogan</div>
        <div className="productPrice">INR 1,190</div>
      </div>
    </div>
  );
};

export default Product;
