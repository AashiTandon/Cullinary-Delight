import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar"; 
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
    <HashRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/payment" element={<Payment />} />
          <Route path="/OrderSuccess" element={<OrderSuccess />} />
        </Routes> 
    </HashRouter>
    </CartProvider>
  );
}

export default App;
