import React from "react";
import { useContext } from "react";
import WishList from "../components/WishList/WishList";
import { WishListContext } from "../context/WishListContext/WishListContext";

const WishListPage = () => {
  const { wishes, dispatch } = useContext(WishListContext);

  function removeCart(id) {
    const removes = wishes.filter((wish, indice) => indice !== id);

    const action = {
      type: "delete_item",
      payload: removes,
    };
    dispatch(action);
  }

  return (
    <>
      <div className="titleContainer">
        <h2 className="h2Title">FAVORITES</h2>
      </div>
      <div className="WishListContainer">
        <WishList wishes={wishes} removeCart={removeCart} />
      </div>
    </>
  );
};

export default WishListPage;
