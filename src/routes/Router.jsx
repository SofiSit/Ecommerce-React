import React from "react";
import { Route, Routes } from "react-router-dom";// cambiar nombre a routes
import Home from '../Pages/Home'
import ProductList from '../components/Products/ProductList';
import WishListPage from "../Pages/WishListPage";

const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/wishlist" element ={<WishListPage />} />

      </Routes>
    </section>
  );
};

export default Pages;
