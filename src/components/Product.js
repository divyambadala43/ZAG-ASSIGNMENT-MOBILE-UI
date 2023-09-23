import React from "react";
import image1 from "../assets/image1.png";
import "../styles/styles.css";

const Product = ({ name, price }) => {
  return (
    <>
      <div>
        <img src={image1} alt="" />
      </div>
      <div>
        <div className="productName">{name}</div>
        <div className="productPrice">{price}</div>
      </div>
    </>
  );
};

export default Product;
