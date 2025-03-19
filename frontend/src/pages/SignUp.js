import React, { useState } from "react";
import "./SignUp.css";
import FooterAll from "../components/Footer-all";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); 

        try {
            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Signup Successful! Please Login.");
                setFormData({ username: "", email: "", password: "" });
            } else {
                setError(data.message || "Signup Failed!");
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="signup-container">
                <h2>Signup</h2>
                {error && <p className="error-message">{error}</p>} 
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Signing Up..." : "Signup"}
                    </button>
                </form>
            </div>
            <FooterAll />
        </>
    );
};

export default Signup;
