import React from "react";
import { useNavigate } from "react-router-dom"; 
import FooterAll from "../components/Footer-all";
import "./OrderSuccess.css";

const OrderSuccess = () => {
    const navigate = useNavigate(); 

    return (
        <>
            <div style={{ textAlign: "center", padding: "50px" }}>
                <h1>Payment Successful!</h1>
                <p>Thank you for your order. Your payment was received successfully.</p>
                <button className="go-home-btn" onClick={() => navigate("/")}>Go to Home</button>
            </div>
            <FooterAll />
        </>
    );
};

export default OrderSuccess;
