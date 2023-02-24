import Header from "./components/Header/Header";
import "./index.css";
import "boxicons";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/context/Dataprovider";
import CartItems from "./components/Cart/CartItems";
import Router from "./routes/Router";
function App() {
  return (
      <BrowserRouter>
    <DataProvider>
    <div className="App">
        <Header />
        <CartItems />
        <Router/>
        <Footer />
    </div>
    </DataProvider>
      </BrowserRouter>
  );
}

export default App;
