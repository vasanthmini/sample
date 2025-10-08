import "./MarutiService.css";
import Carousel from "react-bootstrap/Carousel";
import vitara from "../assets/vitara.avif";
import vitara1 from "../assets/vitara1.avif";
import all from "../assets/all.jpg";

function MarutiService() {
  const cars = [
    { id: 3, img: vitara, alt: "Vitara Model" },
    { id: 4, img: vitara1, alt: "Vitara Front View" },
    { id: 5, img: all, alt: "Maruti Cars All Models" },
  ];

  return (
    <div className="maruti-service">
      {/* 🔹 Fixed Header */}
      <header className="service-header">
        <h1>Maruti Car Service Center</h1>
        <p>Your trusted destination for all Maruti Suzuki car care needs.</p>
      </header>

      {/* 🔹 Scrollable Content */}
      <main className="service-content">
        {/* Carousel */}
        <div className="carousel-wrapper">
          <Carousel fade interval={3000} indicators={true} pause="hover">
            {cars.map((car) => (
              <Carousel.Item key={car.id}>
                <img
                  className="d-block w-100 carousel-img"
                  src={car.img}
                  alt={car.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* 🔹 Service Online */}
        <section className="service-section" id="service-online">
          <h2>Book Your Service Online</h2>
          <p>Schedule your car service with just a few clicks.</p>
          <form className="service-form">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Car Model" required />
            <input type="date" required />
            <button type="submit">Book Now</button>
          </form>
        </section>

        {/* 🔹 Service Cost */}
        <section className="service-section" id="service-cost">
          <h2>Service Cost</h2>
          <ul className="cost-list">
            <li>
              <strong>Basic Service:</strong> ₹2,500
            </li>
            <li>
              <strong>Full Service:</strong> ₹4,500
            </li>
            <li>
              <strong>Premium Service:</strong> ₹6,000
            </li>
            <li>
              <strong>Engine Check:</strong> ₹1,200
            </li>
          </ul>
          <p className="note">*Prices may vary based on model and city.</p>
        </section>

        {/* 🔹 About Us */}
        <section className="service-section" id="about-us">
          <h2>About Us</h2>
          <p>
            We are an authorized Maruti Suzuki service center providing complete
            car maintenance and repair solutions. Our mission is to deliver
            quality service using genuine parts and skilled technicians.
          </p>
        </section>

        {/* 🔹 Why Choose Us */}
        <section className="service-section" id="why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul className="choose-list">
            <li>✅ Certified Maruti Suzuki Technicians</li>
            <li>✅ Genuine Spare Parts</li>
            <li>✅ Fast and Reliable Service</li>
            <li>✅ Transparent Pricing</li>
            <li>✅ 24/7 Customer Support</li>
          </ul>
        </section>

        {/* 🔹 Footer */}
        <footer className="service-footer">
          <p>© 2025 Maruti Car Service Center | All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}

export default MarutiService;
