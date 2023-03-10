import React from "react";
import { Route, Routes } from "react-router-dom";// cambiar nombre a routes
import PrivateRoutes from './PrivateRoutes';
import MySession from '../Pages/MySession';
import Home from '../Pages/Home'
import ProductList from '../components/Products/ProductList';
import WishListPage from "../Pages/WishListPage";
import LoginPage from "../Pages/LoginPage";



const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/login" element = {<LoginPage />} />


        <Route path="/mysession" element ={ <PrivateRoutes> <MySession /> </PrivateRoutes>} />
        <Route path="/wishlist" element ={<PrivateRoutes> <WishListPage /></PrivateRoutes>} />
         

      </Routes>
    </section>
  );
};

export default Pages;
