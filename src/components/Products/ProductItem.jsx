import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
import toast, { Toaster } from "react-hot-toast";

const ProductItem = ({ id, title, price, img }) => {
  const value = useContext(DataContext);
  const addCart = value.addCart;

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
          /* type="submit"
          value="add" */
          onClick={() => {
            addCart(id);
          }}
        >
         Add to Cart
        </button>
        <Toaster position="top-right" reverseOrder={true} />
        <h2>{}</h2>
      </div>
      {/*  <div className="buttom">
      <button className="btn"  onClick={() => addCart(id)}>
        Add to Cart
        </button>
        <Toaster
                            position="top-right"
                            reverseOrder={true} />
                             <h2>{ }</h2>

      <div> */}
      <a href="#" className="btn">
        Show
      </a>
    </div>
  );
};

export default ProductItem;
