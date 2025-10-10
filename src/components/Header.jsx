import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Card from "react-bootstrap/Card";
import {
  faBars,
  faPhone,
  faCar,
  faArrowUp,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-bootstrap/Carousel";
import slogo from "../assets/SLogo.jpg";
import enages from "../assets/enages.png";

import vitara from "../assets/vitara.avif";
import vitara1 from "../assets/vitara1.avif";
import all from "../assets/all.jpg";
import breeze from "../assets/breeze.jpg";
import breeze4 from "../assets/breeze (4).jpeg";

import maruti from "../assets/maruti.jpg";
import nexa from "../assets/nexa.jpg";
import swift from "../assets/swift.jpg";
import dizere from "../assets/dizere.jpg";
import vitradesk from "../assets/vitradesk.png";

 import swift1 from "../assets/swift1 (1).jpeg";
  
import "../Header.css";
import Popover from "./Popover";

function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!MenuOpen);

  const cars = [
    { id: 1, img: vitradesk, details: "NEXA" },
    { id: 2, img: vitara1 },
    { id: 3, img: vitara },
    { id: 4, img: swift },
    { id: 5, img: breeze },
    { id: 6, img: nexa },
    { id: 7, img: maruti },
    { id: 8, img: dizere },
    { id: 9, img: all },
  ];
  const carss = [
    {
      id: 1,
      links: "/NexaPage",
      img: vitradesk,
      details: "NEXA",
      notes: "Nexa showrooms focus on luxury experience and customer service.",
    },
    {
      id: 2,
      img: vitara1,
      links: "/GrandPage",

      details: "Vitara",
      notes:
        "Grand Vitara is Maruti Suzuki’s premium SUV sold via Nexa showrooms",
    },
    {
      id: 3,
      img: swift1,
      links: "/SwiftPage",
      details: "swift",
      notes: "Maruti Suzuki Victoris and e-Vitara (latest models)",
    },
    {
      id: 4,
      img: breeze4,
      details: "Breeze",
      links: "/BreezePage",

      notes:
        "The first generation (2016) was diesel-powered; later models (from ~2020) were switched to petrol",
    },
  ];

  const slides = [];
  for (let i = 0; i < cars.length; i += 4) {
    slides.push(cars.slice(i, i + 4));
  }

const [hoverItem, setHoverItem] = useState("");


  return (
    <>
      <div className="nav-container">
        <div className="nav-con">
          <img src={slogo} alt="Logo" className="logos" />

          {/* Hamburger (FontAwesome icon) */}
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger-icon"
            onClick={toggleMenu}
          />

          {/* Navigation Links */}
          <div className={`navs ${MenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/" className="links">
                  Home
                </Link>
              </li>{" "}
              <li
                onMouseEnter={() => setHoverItem("Corporate")}
                onMouseLeave={() => setHoverItem("")}
              >
                Corporate {hoverItem === "Corporate" && <Popover />}
              </li>
              <li>Sales</li>
              <li>
                {" "}
                <Link to="/MarutiService" className="links">
                  {" "}
                  Service
                </Link>
              </li>
              <li>More from us</li>
              <li>
                {" "}
                <Link to="/ImportantCustomerInfo" className="links">
                  {" "}
                  Important customer info
                </Link>
              </li>
              <li>
                <img src={enages} alt="Icon" className="logos" />
              </li>
            </ul>
          </div>

          {/* Contact (Text for desktop, Icon for mobile) */}
          <h3 className="contact-text">
            <li>
              <Link to="/ContactPage" className="links">
                <FontAwesomeIcon icon={faPhone} />
              </Link>
            </li>{" "}
          </h3>

          <a href="tel:+916381809102" className="contact-icon">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
      </div>
      <div className="carousel1">
        <Carousel className="Carousels1">
          {cars.map((car) => (
            <Carousel.Item key={car.id}>
              <img className="d-block w-100" src={car.img} alt="First slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="Models">
        <h1 className="text-dark">Maruti Suzuki India Business Channels</h1>
        <div className="grid">
          {carss.map((car) => (
            <div key={car.id} className="card-wrapper">
              <img src={car.img} alt={car.details} className="card-img" />
              <div className="card-info">
                <h3>{car.details}</h3>
                <h4 className="text-warning">{car.notes}</h4>
                <Link to={car.links} className="explore-btn">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="more">
        <h1>More from Maruti Suzuki</h1>
        <div className="more-main">
          <div className="line">
            <div className="line-con">
              <FontAwesomeIcon
                icon={faCar}
                className="text-warning fs-1  move"
              />
              <h5 className="move">
                {" "}
                Master the skill of driving at Maruti Suzuki Driving School
              </h5>
            </div>

            <div className="line2">
              <h1 className="line2-con">Driving School</h1>
              <Link to="/MdsPage">
                <FontAwesomeIcon icon={faArrowUp} className="arrow" />
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="line">
            <div className="line-con">
              <FontAwesomeIcon
                icon={faGear}
                className="text-warning fs-1  move"
              />
              <h5 className="move">
                {" "}
                Keep your car healthy. Book a service nearby.go to searh
              </h5>
            </div>

            <div className="line2-1">
              <h1 className="line2-con">Carss Service</h1>
              <FontAwesomeIcon icon={faArrowUp} className="arrow" />
            </div>
          </div>
          {/*  */}
          <div className="line">
            <div className="line-con">
              <FontAwesomeIcon
                icon={faCar}
                className="text-warning fs-1  move"
              />
              <h5 className="move">
                {" "}
                Enhance your drive with Maruti Suzuki Genuine Accessories drive
              </h5>
            </div>

            <div className="line2-2">
              <h1 className="line2-con">Genuine Accessories</h1>
              <FontAwesomeIcon icon={faArrowUp} className="arrow" />
            </div>
          </div>
          {/*  */}

          <div className="line">
            <div className="line-con">
              <FontAwesomeIcon
                icon={faCar}
                className="text-warning fs-1  move"
              />
              <h5 className="move">
                {" "}
                Buy original and reliable Maruti Suzuki Genuine Parts.
              </h5>
            </div>

            <div className="line2-3">
              <h1 className="line2-con">Genuine Parts</h1>
              <FontAwesomeIcon icon={faArrowUp} className="arrow" />
            </div>
          </div>
          {/*  */}
          <div className="line">
            <div className="line-con">
              <FontAwesomeIcon
                icon={faGear}
                className="text-warning fs-1  move"
              />
              <h5 className="move">
                {" "}
                Find the nearest CNG fuel pump.safe and easy save money
              </h5>
            </div>

            <div className="line2-4">
              <h1 className="line2-con">Cng Pump</h1>
              <FontAwesomeIcon icon={faArrowUp} className="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className="Arena">
        <div className="Arena-main">
          <h1> Discover Maruti Suzuki Cars</h1>
          <h3>ARENA</h3>
        </div>
        <div className="car-carousel-container">
          <Carousel interval={null}>
            {slides.map((group, idx) => (
              <Carousel.Item key={idx}>
                <div className="row justify-content-center">
                  {group.map((car) => (
                    <div key={car.id} className="col car-slide">
                      <img
                        src={car.img}
                        alt={`car-${car.id}`}
                        className="car-img"
                      />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <h1>Nexa</h1>
        <div className="car-carousel-container">
          <Carousel interval={null}>
            {slides.map((group, idx) => (
              <Carousel.Item key={idx}>
                <div className="row justify-content-center">
                  {group.map((car) => (
                    <div key={car.id} className="col car-slide">
                      <img
                        src={car.img}
                        alt={`car-${car.id}`}
                        className="car-img"
                      />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="reach-us-container">
        <h2>Reach Us - Maruti Showroom</h2>

        <div className="reach-us-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>
              <strong>Address:</strong> 123 Maruti Road, Auto City, India
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Email:</strong> info@maruticar.com
            </p>
            <p>
              <strong>Working Hours:</strong> Mon-Sat: 9:00 AM - 7:00 PM
            </p>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h4>Send Us a Message</h4>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="Maruti Showroom Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123456789abc%3A0x123456789abc!2sMaruti%20Showroom!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Maruti Cars. All rights reserved.</p>
      </div>
    </>
  );
}

export default Header;
