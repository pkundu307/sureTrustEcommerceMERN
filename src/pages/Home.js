import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";
import Carousel from "../features/Carousel/Carousel";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ProductList />
    </div>
  );
}

export default Home;
