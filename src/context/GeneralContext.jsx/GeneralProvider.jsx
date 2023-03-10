import React from "react";
import CartProvider from "../CartContext/CartProvider";
import ApiProvider from "../ApiContext/ApiProvider";
import WishListProvider from "../WishListContext/WishListProvider";
import UserProvider from "../UserContext/UserProvider";
import UserDataProvider from "../UserDataContext/UserDataProvider";
import LoggedInProvider from '../LoggedInContext/LoggedInProvider'


const GeneralProvider = ({ children }) => {
  return (
    <>
    <LoggedInProvider>
    <UserDataProvider>
    <UserProvider>
      <ApiProvider>
        <CartProvider>
          <WishListProvider>
            {children}
            </WishListProvider>
        </CartProvider>
      </ApiProvider>
      </UserProvider>
      </UserDataProvider>
      </LoggedInProvider>
    </>
  );
};

export default GeneralProvider;
