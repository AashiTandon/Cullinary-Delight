import { useState } from "react";
import { useAuth } from "../context/AuthContext"; 
import "./Login.css";
import FooterAll from "../components/Footer-all";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();  
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                login(data.token);
                alert("Login Successful!");
                navigate("/");
            } else {
                alert(data.message || "Invalid credentials!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
            <FooterAll />
        </>
    );
};

export default Login;
