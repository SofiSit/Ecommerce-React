import React, { useContext } from "react";
import { WishListContext } from "../../context/WishListContext/WishListContext";
import { CartContext } from "../../context/CartContext/CartContext";
import toast, { Toaster } from "react-hot-toast";

const ProductItem = ({ id, title, price, img, handleAddWished }) => {
  const value = useContext(CartContext);
  const addCart = value.addCart;
  const { wishes } = useContext(WishListContext);
  const item = {
    id: id,
    title: title,
    price: price,
    img: img,
  };

  //FAV
  const hearToggle = () => {
    const provisional = wishes.find((wish) => wish.id === item.id);
    if (provisional) {
      return (
        <button
          className="heartButton"
          type="submit"
          value="add"
          onClick={() => {
            handleAddWished(item);
          }}
        >
          <i className="fa fa-heart card red" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (
        <div
          className="heartButton"
          type="submit"
          value="add"
          onClick={() => {
            handleAddWished(item);
          }}
        >
          <i className="fa fa-heart card"></i>
        </div>
      );
    }
  };

  return (
    <div className="product">
      <a href="#">
        <div className="product__image">
          <img src={img} alt={title} />
        </div>
      </a>

      <div className="product__footer">
        <h1>{title}</h1>
      </div>
      <div className="product-price-btn">
        <p>
          <span>{price}</span> €
        </p>
        <button
          onClick={() => {
            addCart(id);
          }}
        >
          Add to Cart
        </button>
        <Toaster position="top-right" reverseOrder={true} />
        <h2>{}</h2>
      </div>
      <div className="buttonContainer">{hearToggle()}</div>
      {/*  <a href="#" className="btn">
        Show
      </a> */}
    </div>
  );
};

export default ProductItem;
