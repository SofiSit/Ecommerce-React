import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  
  } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const CartItems = () => {
  const value = useContext(CartContext); // usecontext es para usar el contexto de cartcontext
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total; //solo el total por qu eno se podran hacer cambios con respecto al total

  const tooglefalse = () => {
    // funcion que falsea el menu para cerrar el modal
    setMenu(false);
  };
  const reduce = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCart([...cart]);
    });
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCart([...cart]);
    });
  };
  const show1 = menu ? "carts show" : "carts"; //consicional si existe menu
  const show2 = menu ? "cart show" : "cart";

  const removeProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product??")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    } 
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="cart__close" onClick={tooglefalse}>
          <box-icons name="x">X</box-icons>
        </div>
        <h2>Shop</h2>
        <div className="cart__center">
          {cart?.length === 0 ? (
            <h2>Your cart is empty</h2>
          ) : (
            <>
              {cart && cart.map((product) => (
                <div className="cart__item" key={product.id}>
                  <img src={require(`../../assets/images/${product.img}`)} alt="" width={310} />
                  <div>
                    <h3>{product.title}</h3>
                    <p className="price">€{product.price}</p>
                  </div>
                  <div>
                    <box-icon
                      onClick={() => increase(product.id)}
                      name="up-arrow"
                      type="solid"
                    />
                    <p className="cantidad">{product.cantidad}</p>
                    <box-icon
                      onClick={() => reduce(product.id)}
                      name="down-arrow"
                      type="solid"
                    />
                  </div>
                  <div
                    className="remove__item"
                    onClick={() => removeProduct(product.id)}
                  >
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}
          <div className="cart__footer">
            <h3>Total:  €{total}</h3>
            <MDBCard className="mb-4 mb-lg-0">
          <MDBCardBody>
            <p>
              <strong>We accept</strong>
            </p>
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
              alt="PayPal acceptance mark" />
          </MDBCardBody>
        </MDBCard>
           <Link to="/paymentpage" onClick={tooglefalse} className="btn" >Payment</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
