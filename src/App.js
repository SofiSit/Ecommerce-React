import Header from "./components/Header/Header";
import "./index.css";
import "boxicons";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import GeneralProvider from "./context/GeneralContext.jsx/GeneralProvider";
import CartItems from "./components/Cart/CartItems";
import Router from "./routes/Router";




function App() {
  return (
    <BrowserRouter>
      <GeneralProvider>
        <div className="App">
          <Header />
          <CartItems />
          <Router />
          <Footer />
        </div>
      </GeneralProvider>
    </BrowserRouter>
  );
}

export default App;
