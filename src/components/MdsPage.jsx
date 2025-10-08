import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faPhone } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import "./MdsPage.css";
import { Link } from "react-router-dom";

import mds1 from "../assets/md1.jpg";
import mds2 from "../assets/md2.jpg";
import mds3 from "../assets/md2.jpg";

export default function MdsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! Your booking request has been submitted.`
    );
    setFormData({ name: "", phone: "", date: "", time: "" });
  };

  const offers = [
    {
      id: 1,
      title: "New Learner Discount",
      desc: "Get 10% off on your first driving course.",
    },
    {
      id: 2,
      title: "Refer & Earn",
      desc: "Refer a friend and get ₹500 cashback.",
    },
    {
      id: 3,
      title: "Corporate Training",
      desc: "Special packages for companies and employees.",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="mds-navbar">
        <div className="text-2xl font-bold flex items-center gap-2 fs-5">
          <FontAwesomeIcon icon={faCar} /> Maruti Driving School
        </div>
        <ul>
          <li>
            {" "}
            <Link to="/" className="linkss">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/AboutPage" className="linkss">
              About
            </Link>
          </li>
          <li>Courses</li>
          <li>Offers</li>
          <li>
            <Link to="/ContactPage" className="linkss">
              <FontAwesomeIcon icon={faPhone} />
            </Link>
          </li>{" "}
        </ul>
      </nav>

      {/* Carousel */}
      <Carousel fade className="mds-carousel">
        <Carousel.Item>
          <img src={mds1} alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={mds2} alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={mds3} alt="Slide 3" />
        </Carousel.Item>
      </Carousel>

      {/* About Section */}
      <section className="mds-section">
        <h2>About Maruti Driving School</h2>
        <p>
          Maruti Driving School is India’s leading driving institute offering
          world-class training and modern simulation technology. Our courses are
          designed to build confident, responsible and skilled drivers.
        </p>
      </section>

      {/* Offers Section */}
      <section className="mds-section" style={{ backgroundColor: "#eff6ff" }}>
        <h2>Current Offers</h2>
        <div className="mds-offers-grid">
          {offers.map((o) => (
            <div key={o.id} className="mds-offer-card">
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="mds-section" style={{ backgroundColor: "#f3f4f6" }}>
        <h2>Book a Driving Slot</h2>
        <form className="mds-form-container" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Preferred Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Booking</button>
        </form>
      </section>

      {/* Contact + Map Section */}
      <section className="mds-section" style={{ backgroundColor: "#e0f2fe" }}>
        <h2>Contact & Location</h2>
        <div className="mds-contact-grid">
          <div style={{ maxWidth: "350px", textAlign: "left" }}>
            <h3>Our Showroom</h3>
            <p>Maruti Driving School,</p>
            <p>1234 Maruti Lane,</p>
            <p>Chennai, Tamil Nadu, India - 600001</p>
            <p style={{ marginTop: "1rem" }}>
              <strong>Email:</strong> contact@marutidriving.com
            </p>
            <p>
              <strong>Phone:</strong> +91 1800 102 1800
            </p>
          </div>
          <div style={{ maxWidth: "500px", width: "100%", height: "300px" }}>
            <iframe
              title="Maruti Driving School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.987933898464!2d80.2752002146234!3d13.0826805906954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52669d4a8c0eb1%3A0xc8f9e2f5f5482e23!2sMaruti%20Suzuki%20India%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mds-footer">
        © 2025 Maruti Driving School | All Rights Reserved
      </footer>
    </div>
  );
}
