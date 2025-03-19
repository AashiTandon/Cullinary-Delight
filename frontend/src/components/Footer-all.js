import { Link } from "react-router-dom";
import "./Footer-all.css";

const FooterAll = () => {

    return (
        <>
        <footer className="footer-all">
            <div className="footer-all-container">
                <div className="footer-all-logo">
                    <h2>Culinary Delight</h2>
                    <p>Savor the flavors, delivered fresh!</p>
                </div>
                <div className="footer-all-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-all-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a><i className="fab fa-facebook"></i></a>
                        <a><i className="fab fa-instagram"></i></a>
                        <a><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                </div>
                <div className="footer-all-bottom">
                    <p>© 2025 Culinary Delight | All Rights Reserved</p>
                </div>
        </footer>        
        </>
    )
}

export default FooterAll;
