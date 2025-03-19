import "./About.css";
import aboutImage from "../images/about-image.jpg"; 
import FooterAll from "../components/Footer-all";

const About = () => {
  return (
    <>
    <div className="about-container">
      <h1 className="about-heading">About Culinary Delight</h1>
      <div className="about-content">
        <img src={aboutImage} alt="About Us" className="about-image" />
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Welcome to <b>Culinary Delight</b>, where passion for food meets an unforgettable dining experience. 
            Established in 2024, our restaurant has been serving delicious, high-quality meals made from the freshest ingredients.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is simple – to bring joy to your plate with <b>authentic flavors, exceptional service, and a warm ambiance.</b> 
            Whether you're craving traditional favorites or innovative dishes, we craft every meal with love and perfection.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Fresh & Locally Sourced Ingredients</li>
            <li>✔ Unique & Authentic Recipes</li>
            <li>✔ Warm & Cozy Ambience</li>
            <li>✔ Friendly & Courteous Staff</li>
            <li>✔ Fast & Reliable Service</li>
          </ul>
        </div>
      </div>
    </div>
    <FooterAll/>
    </>
  );
};

export default About;
