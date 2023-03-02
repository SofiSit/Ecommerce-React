import Header from "./components/Header/Header";
import "./index.css";
import "boxicons";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/CartProvider.jsx';
import CartItems from "./components/Cart/CartItems";
import Router from "./routes/Router";
function App() {
  return (
      <BrowserRouter>
    <CartProvider>
    <div className="App">
        <Header />
        <CartItems />
        <Router/>
        <Footer />
    </div>
    </CartProvider>
      </BrowserRouter>
  );
}

export default App;
