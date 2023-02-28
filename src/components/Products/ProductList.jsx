import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
import ProductItem from "./ProductItem";
import Search from "../Search/Search";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";

  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  return (
    <>
      <div>
        <Search handleFilter={handleFilter} filter={filter} />
      </div>
      <div className="products">
        {products
          .filter((product) => {
            if (!filter) return true;
            else {
              const produTitle = product.title.toLowerCase();

              return produTitle.includes(filter.toLocaleLowerCase());
            }
          })
          .map((product) => (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              id={product.id}
            />
          ))}
      </div>
    </>
  );
};

export default ProductList;
