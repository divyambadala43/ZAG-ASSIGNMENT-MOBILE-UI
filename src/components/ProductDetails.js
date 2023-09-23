import React from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../data2.json";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/slices/cartSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = productsData.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCartHandler = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
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
