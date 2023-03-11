import React from "react";
import { Route, Routes } from "react-router-dom";// cambiar nombre a routes
import PrivateRoutes from './PrivateRoutes';
import MySession from '../Pages/MySession';
import Home from '../Pages/Home'
import ProductList from '../components/Products/ProductList';
import WishListPage from "../Pages/WishListPage";
import LoginPage from "../Pages/LoginPage";
import ShippingPage from "../Pages/ShippingPage";
import ThanksBuy from "../Pages/ThanksBuy";



const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/login" element = {<LoginPage />} />


        <Route path="/mysession" element ={ <PrivateRoutes> <MySession /> </PrivateRoutes>} />
        <Route path="/wishlist" element ={<PrivateRoutes> <WishListPage /></PrivateRoutes>} />
        <Route path="/shippingpage" element ={<PrivateRoutes> <ShippingPage /></PrivateRoutes>} />
        <Route path="/thanksbuy" element ={<PrivateRoutes> <ThanksBuy /></PrivateRoutes>} />


         

      </Routes>
    </section>
  );
};

export default Pages;
