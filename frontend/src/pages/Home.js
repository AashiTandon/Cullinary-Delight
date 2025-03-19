import "./Home.css";
import { Link } from "react-router-dom";
import HomeImage from "../images/home-background.jpg";
import chooseUsImage from "../images/choose-us-image.jpg";
import customer1 from "../images/customer1.jpg";
import customer2 from "../images/customer2.jpg";
import customer3 from "../images/customer3.jpg";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
            <div className="home-container">
                <Link to="/">
                    <img src={HomeImage} alt="HomeImage" className="home-image" />
                </Link>
                <h1 className="home-text">Welcome to Cullinary Delight</h1>
                <p className="home-text1">Enjoy delicious food delivered to your doorstep!</p>
                <Link to="/menu">
                    <button className="home-explore">Explore Menu</button>
                </Link>
            </div>

            <div className="choose-us">
                <h2 className="choose-us-heading">Why Choose Us?</h2>
                <div className="choose-us-container">
                    <img src={chooseUsImage} alt="chooseUsImage" className="chooseUs-image"></img>
                    <ul className="chooseUs-content">
                        <li>
                            <b>Fresh & Quality Ingredients –</b>We use farm-fresh ingredients to prepare every dish with love.
                        </li>
                        <li>
                            <b>Fast & Reliable Delivery –</b>Get your food delivered hot and fresh, straight to your doorstep!
                        </li>
                        <li>
                            <b>Affordable Pricing –</b>Delicious meals at pocket-friendly prices!
                        </li>
                        <li>
                            <b>Wide Variety of Dishes –</b>From Indian flavors to international cuisine, we have it all!
                        </li>
                        <li>
                            <b>Hygienic & Safe –</b>We follow top-notch hygiene standards for your health and safety.
                        </li>
                    </ul>
                </div>

                <div className="reviews">
                    <h1 className="review-heading">Foodie Impressions</h1>
                    <div className="review-container">
                        <div className="review1">
                            <div className="customer-details">
                                <img src={customer1} alt="customer1" className="customer1" />
                                <h3>Rahul Mehta</h3>
                            </div>
                            <div className="customer-message">
                                <p>"Absolutely loved the ambiance and the food! The biryani was bursting with flavors, and the staff was super friendly. Will definitely visit again!"</p>
                            </div>
                        </div>
                        <div className="review2">
                            <div className="customer-details">
                                <img src={customer3} alt="customer3" className="customer3" />
                                <h3>Ananya Sharma</h3>
                            </div>
                            <div className="customer-message">
                                <p>"Great experience! The pasta was creamy and delicious. Overall, a fantastic place to dine."</p>
                            </div>
                        </div>
                        <div className="review3">
                            <div className="customer-details">
                                <img src={customer2} alt="customer2" className="customer2" />
                                <h3>Pooja Iyer</h3>
                            </div>
                            <div className="customer-message">
                                <p>"Loved the vibe of this place. The food was fresh, and the presentation was on point. Would love a few more vegan options, though."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default  Home;