import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import ProductItem from "./ProductItem";
import Search from "../Search/Search";
import { useSearchParams } from "react-router-dom";
import { WishListContext } from '../../context/WishListContext/WishListContext';
import toast from 'react-hot-toast';


const ProductList = () => {
  const value = useContext(CartContext);
  const [products] = value.products;


  //Search
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";// si existe lo asigno a filter si no le asigno cadena vacia a filter

  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  //FAV
  const { wishes, dispatch } = useContext(WishListContext);

  const handleAddWished = (product) => {
    const provisionalWish = wishes.find(e => e.id === product.id)
    if (!provisionalWish) {
      const action = {
        type: 'add_item',
        payload: product,
      }
      dispatch(action);
      const notifyWish = () => toast('Added to wishlist', {
        icon: '❤️',
      });
      return notifyWish();
    } else{
      
      const provisionalWish2 = wishes.filter(e => e.id !== product.id)
  
      const action= {
        type: 'delete_item',
        payload :provisionalWish2,
      }
      dispatch(action);
    }
  }

  function saveWish(wishes) {
    localStorage.setItem("wishes", JSON.stringify(wishes));

  }
  useEffect(() => {
    saveWish(wishes)
    
  }, [wishes]);




  return (
    <>
      <div>
        <Search handleFilter={handleFilter} filter={filter} />
      </div>
      <div className="products">
        {products && products.filter((product) => {
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
              img={require(`../../assets/images/${product.img}`)}
              id={product.id}
              cantidad={product.cantidad}
        handleAddWished={handleAddWished}

            />

          ))}
      </div>
    </>
  );
};

export default ProductList;
