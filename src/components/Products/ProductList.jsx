import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const value = useContext(DataContext);
  const [products] = value.products;


  return (
    <>
      <div className="products">

        {
          products.map((product) => (
            <ProductItem 
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
            id={product.id}
             />
          ))
        }
      </div>
    </>
  );
};

export default ProductList;
