import {
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
import { CartContext } from "../../context/CartContext/CartContext";
import { click } from "@testing-library/user-event/dist/click";

const Paymentsform = () => {
  const value = useContext(CartContext);
  const value2 = useContext(UserContext);
  const [user] = value2.user;
  const [cart, setCart] = value.cart;
  const [total] = value.total;

  const resetCart = () => {
    if (click) {
      cart.length = [];
    }

  };

  // }

  return (
    <>
      <MDBCol lg="5" className="px-5 py-4">
        <MDBTypography
          tag="h3"
          className="mb-5 pt-2 text-center color:#474747 text-uppercase"
        >
          Payment
          <p>Hi {user.name}, Please enter your payment details.</p>
        </MDBTypography>
        <div
          className="d-flex justify-content-between p-2 mb-2"
          style={{ backgroundColor: "#e1f5fe" }}
        >
          <MDBTypography tag="h5" className="fw-bold mb-0">
            <p>Total:</p>
          </MDBTypography>
          <MDBTypography tag="h5" className="fw-bold mb-0">
            €{total}
          </MDBTypography>
        </div>

        {""}
        <form className="mb-5">
          <MDBInput
            className="mb-5"
            type="text"
            size="lg"
            defaultValue="Card number"
          />
          {""}
          <MDBInput
            className="mb-5"
            type="text"
            size="lg"
            defaultValue="Name on card"
          />
          {""}
          <MDBRow>
            <MDBCol md="6" className="mb-5">
              <MDBInput
                className="mb-4"
                type="text"
                size="lg"
                minLength="7"
                maxLength="7"
                defaultValue="Expiration"
                placeholder="MM/YYYY"
              />
              {""}
            </MDBCol>
            <MDBCol md="6" className="mb-5">
              <MDBInput
                className="mb-4"
                label="Cvv"
                type="text"
                size="lg"
                minLength="3"
                maxLength="3"
                placeholder="&#9679;&#9679;&#9679;"
                defaultValue="&#9679;&#9679;&#9679;"
              />
            </MDBCol>
          </MDBRow>

          <Link to="/thanksbuy">
            <button className="btn_payform" onClick={resetCart()}>
              Buy Now
            </button>{" "}
          </Link>
        </form>
      </MDBCol>
      <MDBTypography
        tag="h5"
        className="fw-bold mb-5"
        style={{ color: "darksalmon" }}
      >
        <a href="/productlist">
          <MDBIcon fas icon="angle-left me-2" />
          Back to shopping
        </a>
      </MDBTypography>
    </>
  );
};

export default Paymentsform;
