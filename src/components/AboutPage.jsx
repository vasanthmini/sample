import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faUsers,
  faHandshake,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Header */}
      <div className="about-hero">
        <h1>About Maruti Suzuki Nexa</h1>
        <p>Innovation • Trust • Excellence</p>
      </div>

      {/* Company Intro */}
      <section className="about-intro">
        <h2>Who We Are</h2>
        <p>
          Maruti Suzuki India is the leading automobile manufacturer, known for
          its innovation, customer trust, and unmatched service. The <b>NEXA</b>{" "}
          experience brings premium cars and a lifestyle that matches modern
          aspirations.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To create cars that inspire journeys, ensure customer delight, and
            provide eco-friendly mobility solutions for future generations.
          </p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To be the most trusted and innovative car brand, offering premium
            experiences and building strong customer relationships.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-item">
            <FontAwesomeIcon icon={faCar} className="icon" />
            <h4>Premium Cars</h4>
            <p>Latest designs with advanced technology and safety.</p>
          </div>
          <div className="why-item">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <h4>Customer First</h4>
            <p>Trusted by millions of happy customers across India.</p>
          </div>
          <div className="why-item">
            <FontAwesomeIcon icon={faHandshake} className="icon" />
            <h4>Trusted Service</h4>
            <p>Nationwide service network with expert care.</p>
          </div>
          <div className="why-item">
            <FontAwesomeIcon icon={faLeaf} className="icon" />
            <h4>Eco Friendly</h4>
            <p>Focused on sustainable and green mobility solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
