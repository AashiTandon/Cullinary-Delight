import { useState } from "react";
import "./Contact.css";
import FooterAll from "../components/Footer-all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons"; 
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                alert("Failed to send message");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Get in Touch</h1>

            <div className="contact-content">
                <div className="contact-details">
                    <h2>Contact Information</h2>
                    <p><strong><FontAwesomeIcon icon={faLocationDot} /> Address:</strong> Cullinary Delight, Haldwani</p>
                    <p><strong><FontAwesomeIcon icon={faPhone} /> Phone:</strong> +91 12345 67891</p>
                    <p><strong><FontAwesomeIcon icon={faEnvelope} /> Email:</strong> cullinary.delight@gmail.com</p>
                    <p><strong><FontAwesomeIcon icon={faClock} /> Opening Hours:</strong> 10:00 AM - 11:00 PM</p>
                </div>

                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Your Email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="text" 
                            name="subject"
                            placeholder="Subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            required 
                        />
                        <textarea 
                            name="message"
                            placeholder="Your Message" 
                            rows="5" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            <FooterAll />
        </div>
    );
};

export default Contact;
