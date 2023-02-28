import { useContext } from "react";
import { DataContext } from "../context/Dataprovider";

const CartItems = () => {
  const value = useContext(DataContext); // usecontext es para usar el contexto de datacontext
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;

  const tooglefalse = () => {
    // funcion que falsea el menu para cerrar el modal
    setMenu(false);
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
          {cart.map((product) => (
            <div className="cart__item">
              <img src={product.img} alt="" width={310} />
              <div>
                <h3>{product.title}</h3>
                <p className="price">€{product.price}</p>
              </div>
              <div>
                <box-icon name="plus"></box-icon>
                <p className="cantidad">{product.cantidad}</p>
                <box-icon name="minus"></box-icon>
              </div>
              <div
                className="remove__item"
                onClick={() => removeProduct(product.id)}
              >
                <box-icon name="trash"></box-icon>
              </div>
            </div>
          ))}

          <div className="cart__footer">
            <h3>Total: $5656</h3>
            <button className="btn">Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
