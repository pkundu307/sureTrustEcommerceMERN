import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";
import Carousel from "../features/Carousel/Carousel";
import Footer from "../features/components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ProductList />
      <Footer/>
    </div>
  );
}

export default Home;
