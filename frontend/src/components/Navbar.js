import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";  
import "./Navbar.css";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();  

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      
      <Link to="/" className="link">Home</Link> 
      <Link to="/about" className="link">About</Link> 
      <Link to="/menu" className="link">Menu</Link>  
      <Link to="/contact" className="link">Contact</Link>

      {isAuthenticated ? (
        <button className="link logout-btn" onClick={logout}>Logout</button>
      ) : (
        <>
          <Link to="/login" className="link">Login</Link> 
          <Link to="/signup" className="link">Sign Up</Link>  
        </>
      )}

      <Link to="/cart" className="link">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    </nav>
  );
};

export default Navbar;
