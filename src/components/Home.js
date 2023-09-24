import React from "react";
import Product from "./Product";
import SearchBar from "./SearchBar";
import productsData from "../data2.json";
import { Link } from "react-router-dom";
import Header from "./Header";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <div className={styles.categoriesContainer}>
        <div className={styles.categorySelected}>
          <div>All</div>
        </div>
        <div className={styles.category}>
          <div>Men</div>
        </div>
        <div className={styles.category}>
          <div>Women</div>
        </div>
        <div className={styles.category}>
          <div>Kids</div>
        </div>
      </div>
      <div className={styles.productsContainer}>
        {productsData.map((product) => (
          <div className={styles.productContainer} key={product.id}>
            <Link
              to={`/details/${product.id}`}
              style={{ textDecoration: "none" }}>
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                imagePath={product.imagePath}
                imageName={product.imageName}
              />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
