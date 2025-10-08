import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help you with your car enquiries and services</p>
      </div>

      <div className="contact-content">
        {/* Contact Details */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> +91 6381809103
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> info@nexa.com
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Nexa
            Showroom, MG Road, Chennai, India
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Map Section (Optional) */}
      <div className="contact-map">
        <iframe
          title="Nexa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.54082432164!2d80.2433!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265dd4a6b9a35%3A0xb6b7270a2!2sNexa%20Showroom!5e0!3m2!1sen!2sin!4v1633956786789!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
