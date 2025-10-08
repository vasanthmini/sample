import vitara1 from "../assets/vitara1.avif";
import vitara2 from "../assets/vitara2.avif";
import nexa from "../assets/nexa.jpg";
import swift from "../assets/swift.jpg";

import eritaga from "../assets/eritaga.jpg";
import "./NexaModelPage.css";

export default function NexaCar() {
  const cars = [
    {
      id: 1,
      name: "Vitara Brezza",
      price: "₹8.5 Lakh* onwards",
      img: vitara1,
    },
    {
      id: 2,
      name: "Grand Vitara",
      price: "₹10.5 Lakh* onwards",
      img: vitara2,
    },
    {
      id: 3,
      name: "Baleno",
      price: "₹6.6 Lakh* onwards",
      img: nexa,
    },
    {
      id: 4,
      name: "swift",
      price: "₹9.3 Lakh* onwards",
      img: swift,
    },
    {
      id: 5,
      name: "Eritaga",
      price: "₹11.3 Lakh* onwards",
      img: eritaga,
    },
  ];

  return (
    <div className="models-container">
      <h1>Nexa Car Models</h1>
      <div className="models-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.img} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            {/* <Link to={`/nexa/${car.id}`} className="details-btn">
              View Details
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
