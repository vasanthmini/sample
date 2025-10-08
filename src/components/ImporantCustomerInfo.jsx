import { Link } from "react-router-dom";
import "./ImportantCustomerInfo.css";

const recalls = [
  "Maruti Suzuki to undertake a Service Campaign for 144 units of Dzire(NEW)",
  "Maruti Suzuki to recall 2,555 Alto K10 vehicles",
  "Important Information for Customers of Saya Automobiles",
  "Maruti Suzuki to recall 11,851 units of Baleno and 4,190 units of WagonR",
  "New Regulation 2023 “In-use performance ratio (IUPR)”: OBD data capturing of Customer Vehicles",
  "Maruti Suzuki to recall 87,599 vehicles of S-Presso and Eeco",
  "Maruti Suzuki to undertake service campaign for 676 vehicles, affected models include Ertiga and XL6",
  "Maruti Suzuki to recall 17,362 vehicles",
  "Maruti Suzuki to recall 9,125 vehicles",
  "Maruti Suzuki to recall 9,925 vehicles of Wagon R, Celerio and Ignis",
  "Maruti Suzuki to recall 5,002 Super Carry vehicles",
  "Maruti Suzuki to recall 166 Dzire Tour S vehicles",
  "Maruti Suzuki to proactively recall 19,731 units of EECO",
  "Maruti Suzuki to proactively recall 181,754 units of some petrol variants of Ciaz, Ertiga, Vitara Brezza, S-Cross and XL6",
  "Maruti Suzuki to proactively recall 40,453 units of Eeco",
  "Maruti Suzuki to proactively recall 134,885 units of WagonR and Baleno",
  "Maruti Suzuki to proactively recall 63,493 Petrol Smart Hybrid variants of Ciaz, Ertiga and XL6 models",
  "Maruti Suzuki to proactively recall 40,618 WagonR (1 litre) vehicles",
  "Maruti Suzuki’s Service Campaign for Baleno (3,757 nos)",
  "Important information for Customers of Super Carry",
  "Maruti Suzuki’s Service Campaign for Ciaz Diesel, Zeta and Alpha variants only",
  "Important information for Customers of new Swift and new Dzire",
  "New Regulation 2020 “In-Service Emission Check”: Emission Testing of Customer Vehicles",
];

const ImportantCustomerInfo = () => {
  return (
    <div className="customer-info-page">
      <header className="header">
        <h1>Maruti Suzuki</h1>
        <nav>
          <ul>
            <Link to="/">Home</Link>
          </ul>
        </nav>
      </header>

      <section className="contact-section">
        <h2>IMPORTANT CUSTOMER INFO</h2>
        <div className="contact-details">
          <p>
            <strong>Engage:</strong> Marutisuzukiarena
          </p>
          <p>
            <strong>Phone:</strong> 1800 102 1800
          </p>
          <p>
            <strong>Email:</strong> contact@maruti.co.in
          </p>
          <p>
            <strong>Anytime Maruti:</strong> Marutisuzukiarena
          </p>
        </div>
      </section>

      <section className="recalls-section">
        <h3>Vehicle Recalls & Service Campaigns</h3>
        <ul>
          {recalls.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="actions-section">
        <h3>Customer Actions</h3>
        <button>Book a Showroom Visit</button>
        <button>Book a Test Drive</button>
        <button>Get Price List</button>
        <button>Book a Service Appointment</button>
        <button>Locate a Dealer</button>
      </section>

      <footer className="footer">
        <p>Maruti Suzuki India Limited © 2025</p>
        <p>Contact: 1800 102 1800 | contact@maruti.co.in</p>
      </footer>
    </div>
  );
};

export default ImportantCustomerInfo;
