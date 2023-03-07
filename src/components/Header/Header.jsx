import React, { useContext } from "react";
import "boxicons";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext/CartContext';

const Header = () => {
  const value = useContext(CartContext);
  const [menu, setMenu] = value.menu;// manejador de estado global
  const [cart] = value.cart;// manejador de estado global]


  const toggleMenu = () => {//funcion que cambia el estado del menu
    setMenu(!menu);
  };

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo" width={"150"} />
        </div>
      </Link>

      <ul>
        <li>
          <Link to="/" > Home </Link>
        </li>
        <li>
          <Link to="/ProductList">Shop</Link>
        </li>
      </ul>
      <div className="containIcons">
        <Link className="heart" to="/wishlist">
        <box-icon name="heart" color="white" ></box-icon>
      </Link>
      <div className="cart1" onClick={toggleMenu}>
        <box-icon name="cart-alt" color="white"></box-icon>
        <span className="item__total">{cart?.length}</span>
      </div></div>
      
      
     
    </header>
  );
};

export default Header;
