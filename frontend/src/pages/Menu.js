import "./Menu.css";
import FooterAll from "../components/Footer-all";
import { useCart } from "../context/CartContext"; 
import { useState } from "react";

import pizzaImage from "../images/pizza.jpg";
import paneerImage from "../images/paneer.jpg";
import daalImage from "../images/daal.jpg";
import palakPaneer from "../images/palakPaneer.jpg";
import naan from "../images/naan.jpg";
import whiteSaucePasta from "../images/whiteSaucePasta.jpg";
import redSaucePasta from "../images/redSaucePasta.jpg";
import cannoli from "../images/cannoli.jpg";
import burgerImage from "../images/burger.jpg";
import sandwich from "../images/sandwich.jpg";
import fries from "../images/fries.jpg";
import mac_n_cheese from "../images/mac_n_cheese.jpg";
import noodles from "../images/noodles.jpg";
import friedRice from "../images/friedRice.jpg";
import dumplings from "../images/dumplings.jpg";
import soup from "../images/soup.jpg";

const menuItems = [
    { id: 1, name: "Paneer Royale Delight", description: "Soft paneer cubes drenched in a luscious, spice-infused gravy", price: 250, image: paneerImage },
    { id: 2, name: "Golden Lentil Bliss", description: "A creamy, aromatic, and soulful delight!", price: 150, image: daalImage },
    { id: 3, name: "Emerald Paneer Delight", description: "Creamy spinach meets soft perfection!", price: 240, image: palakPaneer },
    { id: 4, name: "Flame-Kissed Cloud Naan", description: "Soft, fluffy, and perfectly tandoor-charred!", price: 25, image: naan },
    { id: 5, name: "MozzaMagic Pizza", description: "Loaded with magical mozzarella", price: 250, image: pizzaImage },
    { id: 6, name: "Snowy Alfredo Bliss", description: "Creamy, cheesy, and irresistibly smooth!", price: 159, image: whiteSaucePasta },
    { id: 7, name: "Scarlet Italiano Delight", description: "Tangy, herby, and bursting with flavor!", price: 159, image: redSaucePasta },
    { id: 8, name: "Crisp Roll of Heaven", description: "Crunchy outside, creamy sweet inside!", price: 79, image: cannoli },
    { id: 9, name: "Stacked Bliss Burger", description: "Juicy, cheesy, and flavor-packed delight!", price: 99, image: burgerImage },
    { id: 10, name: "CrunchStack Delight", description: "Layered flavors in every crispy bite!", price: 89, image: sandwich },
    { id: 11, name: "Golden Crisp Sticks", description: "Crunchy, salty, and absolutely addictive!", price: 59, image: fries },
    { id: 12, name: "Cheesy Velvet Swirls", description: "Creamy, gooey, and irresistibly cheesy!", price: 179, image: mac_n_cheese },
    { id: 13, name: "Twist & Tang Noodles", description: "Slurpy, spicy, and full of flavor!", price: 79, image: noodles },
    { id: 14, name: "Wok Tossed Treasure", description: "Smoky, savory, and perfectly seasoned!", price: 189, image: friedRice },
    { id: 15, name: "Golden Pocket Bites", description: "Soft, juicy, and flavor-packed parcels!", price: 99, image: dumplings },
    { id: 16, name: "Dragon’s Broth Soup", description: "Warm, comforting, and soul-soothing!", price: 120, image: soup }
];

const Menu = () => {
    const { addToCart } = useCart();
    const [addedItems, setAddedItems] = useState({}); 

    const handleAddToCart = (item) => {
        addToCart(item);
        setAddedItems((prevState) => ({
            ...prevState,
            [item.id]: true,
        }));
    };

    return (
        <>
            <div className="menu-container">
                <h1 className="menu-heading">Our Delicious Menu</h1>
                <div className="menu-grid">
                    {menuItems.map((item) => (
                        <div key={item.id} className="menu-item">
                            <img src={item.image} alt={item.name} className="menu-image" />
                            <h2 className="dish-name">{item.name}</h2>
                            <p className="dish-description">{item.description}</p>
                            <p className="dish-price">₹{item.price}</p>
                            <button 
                                className={`add-to-cart-btn ${addedItems[item.id] ? "added" : ""}`} 
                                onClick={() => handleAddToCart(item)}
                                disabled={addedItems[item.id]} 
                            >
                                {addedItems[item.id] ? "Added to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <FooterAll />
        </>
    );
};

export default Menu;
