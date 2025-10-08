// NexaCarPage.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCar } from "@fortawesome/free-solid-svg-icons";

import vitara1 from "../assets/vitara1.avif";
import "./NexaCarPage.css";

function GrandPage() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking details:", booking);
    alert("Thank you! Your enquiry is submitted.");
    setBooking({ name: "", email: "", phone: "", message: "" });
  };

  const carDetails = {
    name: "Grand Vitara",
    img: vitara1,
    price: "₹8.5 Lakh* onwards",
    features: [
      "Premium LED headlamps",
      "SmartPlay infotainment system",
      "Dual airbags & ABS",
      "Touchscreen navigation",
      "Stylish alloy wheels",
      "Automatic climate control",
      "Leather seats interior",
    ],
  };

  return (
    <div className="nexa-page-container">
      {/* Header */}
      <header className="nexa-header">
        <nav className="nexa-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/GrandVitaraCar">Grand Vitara Cars</Link>
            </li>
            <li>
              <Link to="/AboutPage">About</Link>
            </li>
            <li>
              <Link to="/ContactPage">
                <FontAwesomeIcon icon={faPhone} /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Car Section */}
      <section className="car-main">
        <div className="car-image">
          <img src={carDetails.img} alt={carDetails.name} />
        </div>
        <div className="car-info">
          <h1>{carDetails.name}</h1>
          <h2>{carDetails.price}</h2>
          <h3>Key Features:</h3>
          <ul>
            {carDetails.features.map((feature, idx) => (
              <li key={idx}>
                <FontAwesomeIcon icon={faCar} className="icon" /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking / Enquiry Form */}
      <section className="car-booking">
        <h2>Book / Enquire Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={booking.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={booking.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={booking.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={booking.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="nexa-footer">
        <p>
          Contact Us: <FontAwesomeIcon icon={faPhone} /> +91 98765 43210 |{" "}
          <FontAwesomeIcon icon={faEnvelope} /> info@nexa.com
        </p>
        <p>© 2025 Nexa Cars. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default GrandPage;
