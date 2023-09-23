import React from "react";
import Product from "./Product";
import SearchBar from "./SearchBar";
import productsData from "../data2.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        {productsData.map((product) => (
          <Link to={`/details/${product.id}`}>
            <div key={product.id}>
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
