import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";  
import "./Cart.css";

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity} = useCart();
    const navigate = useNavigate();  

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
        <div className="cart-container">
            <h1 className="cart-heading">🛒 Your Cart</h1>

            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty!</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item-image" /> 
                            <div className="cart-item-details">
                                <h2 className="cart-item-name">{item.name}</h2>
                                <p className="cart-item-price">₹{item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <h2 className="total-amount">Total: ₹{totalAmount}</h2>
                    <button className="checkout-btn" onClick={() => navigate("/payment")}>Proceed to Payment</button>  {/* ✅ Fixed navigate */}
                </div>
            )}
        </div>
        </>
    );
};

export default Cart;
