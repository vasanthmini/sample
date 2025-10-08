import grand1 from "../assets/grand (1).jpeg";
import grand2 from "../assets/grand (2).jpeg";
import grand3 from "../assets/grand (3).jpeg";
import grand4 from "../assets/grand (4).jpeg";

import grand5 from "../assets/grand (5).jpeg";
import grand6 from "../assets/grand (6).jpeg";
import grand7 from "../assets/grand (7).jpeg";
import grand8 from "../assets/grand (8).jpeg";
import grand9 from "../assets/grand (9).jpeg";



import "./NexaModelPage.css";

export default function GrandVitaraCar() {
  const cars = [
    {
      id: 1,
      name: "Grand Vitara Sigma",
      price: "₹10.7 Lakh* onwards",
      fuel: "Petrol / Manual",
      mileage: "21.11 km/l",
      engine: "1.5L K-Series Smart Hybrid",
      img: grand6,
    },
    {
      id: 2,
      name: "Grand Vitara Delta",
      price: "₹12.1 Lakh* onwards",
      fuel: "Petrol / Manual",
      mileage: "20.5 km/l",
      engine: "1.5L K-Series Smart Hybrid",
      img: grand1,
    },
    {
      id: 3,
      name: "Grand Vitara Zeta",
      price: "₹13.9 Lakh* onwards",
      fuel: "Petrol / Automatic (6-Speed)",
      mileage: "20.8 km/l",
      engine: "1.5L K-Series Smart Hybrid",
      img: grand2,
    },
    {
      id: 4,
      name: "Grand Vitara Alpha",
      price: "₹15.1 Lakh* onwards",
      fuel: "Petrol / Automatic (6-Speed)",
      mileage: "21.0 km/l",
      engine: "1.5L K-Series Smart Hybrid",
      img: grand3,
    },
    {
      id: 5,
      name: "Grand Vitara Zeta+ Hybrid",
      price: "₹16.9 Lakh* onwards",
      fuel: "Petrol / e-CVT Hybrid",
      mileage: "27.97 km/l",
      engine: "1.5L TNGA Strong Hybrid",
      img: grand4,
    },
    {
      id: 6,
      name: "Grand Vitara Alpha+ Hybrid",
      price: "₹18.3 Lakh* onwards",
      fuel: "Petrol / e-CVT Hybrid",
      mileage: "27.97 km/l",
      engine: "1.5L TNGA Strong Hybrid",
      img: grand5,
    },
    {
      id: 7,
      name: "Grand Vitara Delta CNG",
      price: "₹13.1 Lakh* onwards",
      fuel: "CNG / Manual",
      mileage: "26.6 km/kg",
      engine: "1.5L K-Series Dual Jet CNG",
      img: grand6,
    },
    {
      id: 8,
      name: "Grand Vitara Zeta AWD",
      price: "₹15.8 Lakh* onwards",
      fuel: "Petrol / All-Wheel Drive (Manual)",
      mileage: "19.5 km/l",
      engine: "1.5L K-Series Smart Hybrid AWD",
      img: grand7,
    },
    {
      id: 9,
      name: "Grand Vitara Alpha Black Edition",
      price: "₹18.8 Lakh* onwards",
      fuel: "Petrol / Automatic",
      mileage: "20.6 km/l",
      engine: "1.5L K-Series Smart Hybrid",
      img: grand8,
    },
    {
      id: 9,
      name: "Grand Vitara Alpha Black Edition",
      price: "₹18.8 Lakh* onwards",
      fuel: "Petrol / Automatic",
      mileage: "20.6 km/l",
      engine: "1.5L K-Series Smart Hybrid",
      img: grand9,
    },
  ];

  return (
    <div className="models-container">
      <h1>Grand vitara Car Models</h1>
      <div className="models-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.img} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <p>{car.fuel}</p>
            <p>{car.mileage}</p>
            <p>{car.engine}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
