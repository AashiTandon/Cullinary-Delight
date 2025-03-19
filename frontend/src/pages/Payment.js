import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import FooterAll from "../components/Footer-all";
import "./Payment.css";

const Payment = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleFakePayment = () => {
        setTimeout(() => {
            alert("Payment Successful! Thank you for your order.");
            console.log("Navigating to OrderSuccess page...");
            clearCart();  
            navigate("/OrderSuccess");
        }, 2000);
    };
    

    return (
        <>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>Complete Your Payment</h1>
                <h2>Total Amount: ₹{totalAmount}</h2>
                <button className="pay-now-btn" onClick={handleFakePayment}>
                    Pay Now
                </button>
            </div>
            <FooterAll />
        </>
    );
};

export default Payment;
