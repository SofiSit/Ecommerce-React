import "boxicons";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { UserContext } from "../../context/UserContext/UserContext";
import { LoggedInContext } from "../../context/LoggedInContext/LoggedInContext";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const value = useContext(CartContext);
  const value2 = useContext(UserContext);
  const [menu, setMenu] = value.menu; // manejador de estado global
  const [cart] = value.cart;
  const [user, setUser] = value2.user; // manejador de estado global]
  const { setLoggedIn } = useContext(LoggedInContext);
  const navigate = useNavigate();

  const logOut = () => {
    setUser(false);
    setLoggedIn(false);
    navigate("/");
  };

  const doubleWay = () => {
    user ? navigate("/") : navigate("/login");
  };

  const toggleMenu = () => {
    //funcion que cambia el estado del menu
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
        <div className="user">
          {user ? (
            <>
              <NavDropdown
                title={user.name}
                id="basic-nav-dropdown"
                color="white"
              >
                <NavDropdown.Item href="/mysession">
                  My session
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <div onClick={logOut}>Log out</div>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : null}
          <div onClick={doubleWay}>
            {" "}
            <box-icon name="user" color="white"></box-icon>
          </div>{" "}
        </div>
        {user ? (
          <>
            <Link className="heart" to="/wishlist">
              <box-icon name="heart" color="white"></box-icon>
            </Link>
            <div className="cart1" onClick={toggleMenu}>
              <box-icon name="cart-alt" color="white"></box-icon>
              <span className="item__total">{cart?.length}</span>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
