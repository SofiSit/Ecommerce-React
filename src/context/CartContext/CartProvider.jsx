import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { CartContext } from "./CartContext";
import Data from "../../data/Data"; //import data

/* let stored = JSON.parse(localStorage.getItem("dataCarrito")) */

const CartProvider = (props) => {
  //crear contexto qu emaneja nuestras variables globales que en este caso son los productos, la data sera consumida de forma globla en carrito detalles y lista, creo el usestate que es el manejador de estados local, nuestro producto es un objeto que contiene los datos de cada producto.

  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState(false);
  const getLocalStorage = localStorage.getItem("cart");
  const [cart, setCart] = useState(getLocalStorage ? JSON.parse(getLocalStorage) : []);
  const [total, setTotal] = useState(0);


//localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const producto = Data.items;
    if (producto) {
      setProducts(producto);
    } else {
      setProducts([]);
    }
    //creamos value que pasamos por props
  }, []);

  const addCart = (id) => {
    const check = cart.every((item) => {
      // este every lo que hace es evaluar si el item.id es !== al id del producto en el array cart
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((producto) => {
        return producto.id === id;
      });
      setCart([...cart, ...data]);
      const popUp = () => toast.success("Added to cart");
      return popUp();

    } else {
      const popUp = () => toast.error("Item is already in te cart");
      return popUp();

    }
  };



  //total de los productos en el carrito
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((acum, item) => {  //acumulador e index
        return acum + (item.price * item.cantidad );
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const value = {
    //es consumido por los componentes hijos
    products: [products],
    menu: [menu, setMenu],
    addCart: addCart,
    cart: [cart, setCart],
    total: [total, setTotal],
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
export default CartProvider;
