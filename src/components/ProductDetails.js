import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../data2.json";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, increaseQuantity } from "../redux/slices/cartSlice";

function ProductDetails() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = productsData.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCartHandler = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      dispatch(increaseQuantity(product.id));
    } else {
      dispatch(
        addProductToCart({
          id: product.id,
          name: product.name,
          imageName: product.imageName,
          imagePath: product.imagePath,
          price: product.price,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imagePath} alt={product.imageName} />
      <p>Description: {product.description}</p>
      <p>INR: {product.price}</p>
      <div>
        {product.sizes.map((size) => (
          <button key={size}>{size}</button>
        ))}
      </div>
      <Link to="/cart">
        <button onClick={addToCartHandler}>Add To Cart</button>
      </Link>
    </div>
  );
}

export default ProductDetails;
