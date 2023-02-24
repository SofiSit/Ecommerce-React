import React from "react";
import { Route, Routes } from "react-router-dom";// cambiar nombre a routes
import Home from '../components/Pages/Home'
import ProductList from "../components/Products/ProductList";

const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </section>
  );
};

export default Pages;
