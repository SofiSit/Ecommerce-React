import React, { useContext } from "react";
import "boxicons";
import logo from "../../assets/images/logo.png";
import { Link , NavLink} from "react-router-dom";
import { DataContext } from "../context/Dataprovider";

const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;// manejador de estado global
  const [cart, setCart] = value.cart;// manejador de estado global]


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
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/ProductList">Products</Link>
        </li>
      </ul>
      <div className="containIcons">
        <div className="heart">
        <box-icon name="heart" color="white"></box-icon>
      </div>
      <div className="cart1" onClick={toggleMenu}>
        <box-icon name="cart-alt" color="white"></box-icon>
        <span className="item__total">{cart.length}</span>
      </div></div>
      
      
     
    </header>
  );
};

export default Header;
