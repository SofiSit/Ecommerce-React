import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

import Data from "../../data/Data"; //import data

export const DataContext = createContext(); //exportamos el contexto

export const DataProvider = (props) => {
  //crear contexto qu emaneja nuestras variables globales que en este caso son los productos, la data sera consumida de forma globla en carrito detalles y lista, creo el usestate que es el manejador de estados local, nuestro producto es un objeto que contiene los datos de cada producto.

  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(() => {
    const datCart =localStorage.getItem('Cart');
    const dataCart = JSON.parse(datCart);
    return dataCart ? dataCart:[]; //no puede ser null 
  });

  useEffect(() => {
    const producto = Data.items;
    if (producto) {
      setProducts(producto);
    } else {
      setProducts([]);
    }

    //creamos value que pasamos por props
  }, []);

/*   function addCart(product) {
    const index = products.find(e => e.id === product.id)
    if (index) {
        setCart(
            cart.map(e => e.id === product.id ? {
                ...index,
                quantity: index.quantity + 1
            }
                : e));
    } else {
        setCart([...cart, { ...product, quantity: 1 }])
    }
    const notify = () => toast.success('Added to cart');
    console.log('add')
    return notify();
} */

  const addCart = (id) => {
   const check = cart.every((item) => {
       // este every lo que hace es evaluar si el item.id es !== al id del producto en el array cart
      return item.id !== id;
    });
    if (check) {
     
      const data = products.filter((producto) => {
        return producto.id === id ;
      });
      setCart([...cart, ...data]);
      const popUp = () => toast.success('Added to cart');
      return popUp();
    } else {
      alert("The product is already in the cart");
    } 

  };
 
   
 /*  useEffect   ( () => {     
   const dataCart= JSON.parse(localStorage.getItem("dataCart"))//al momento de hacer la petision s eparsea la data, peticion getitem traemos lo del ls dentro de carrito
   if(dataCart){
       setCart(dataCart);
   }
}, []);    */

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart)); // guarda nuestro localstorage dentro de data carrito parseado
  }, [cart]); 

  const value = {
    products: [products],
    menu: [menu, setMenu],
    addCart: addCart,
    cart: [cart, setCart],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
