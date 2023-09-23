import React from "react";
// import image1 from "../assets/image1.png";
import "../styles/styles.css";

const Product = ({ name, price, imagePath, imageName }) => {
  return (
    <>
      <div>
        <img src={imagePath} alt={imageName} />
      </div>
      <div>
        <div className="productName">{name}</div>
        <div className="productPrice">{price}</div>
      </div>
    </>
  );
};

export default Product;
