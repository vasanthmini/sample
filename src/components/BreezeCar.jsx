import breeze1 from "../assets/breeze (1).jpeg";
import breeze2 from "../assets/breeze (2).jpeg";
import breeze3 from "../assets/breeze (3).jpeg";
import breeze4 from "../assets/breeze (4).jpeg";

import breeze5 from "../assets/breeze (5).jpeg";
import breeze6 from "../assets/breeze (6).jpeg";
import breeze7 from "../assets/breeze (7).jpeg";
import breeze8 from "../assets/breeze (8).jpeg";
import breeze9 from "../assets/breeze (9).jpeg";
import breeze10 from "../assets/breeze (10).jpeg";




import "./NexaModelPage.css";

export default function BreezeCar() {
  const cars = [
    {
      id: 1,
      name: "Brezza LXi",
      price: "₹8.5 Lakh* onwards",
      fuel: "Petrol / Manual",
      mileage: "17.38 km/l",
      engine: "1.5L K15C Smart Hybrid",
      img: breeze1,
    },
    {
      id: 2,
      name: "Brezza VXi",
      price: "₹9.8 Lakh* onwards",
      fuel: "Petrol / Manual",
      mileage: "19.8 km/l",
      engine: "1.5L K15C Smart Hybrid",
      img: breeze2,
    },
    {
      id: 3,
      name: "Brezza ZXi",
      price: "₹11.1 Lakh* onwards",
      fuel: "Petrol / Manual",
      mileage: "20.15 km/l",
      engine: "1.5L K15C Smart Hybrid",
      img: breeze3,
    },
    {
      id: 4,
      name: "Brezza ZXi+",
      price: "₹12.5 Lakh* onwards",
      fuel: "Petrol / Automatic (6-Speed)",
      mileage: "19.80 km/l",
      engine: "1.5L K15C Smart Hybrid",
      img: breeze4,
    },
    {
      id: 5,
      name: "Brezza VXi AT",
      price: "₹11.8 Lakh* onwards",
      fuel: "Petrol / Automatic (6-Speed)",
      mileage: "19.8 km/l",
      engine: "1.5L K15C Smart Hybrid",
      img: breeze5,
    },
    {
      id: 6,
      name: "Brezza ZXi CNG",
      price: "₹12.1 Lakh* onwards",
      fuel: "CNG / Manual",
      mileage: "25.51 km/kg",
      engine: "1.5L K15C Dual Jet CNG",
      img: breeze6,
    },
    {
      id: 7,
      name: "Brezza ZXi+ DT",
      price: "₹13.6 Lakh* onwards",
      fuel: "Petrol / Automatic (6-Speed)",
      mileage: "19.9 km/l",
      engine: "1.5L K15C Smart Hybrid",
      img: breeze7,
    },
    {
      id: 8,
      name: "Brezza LXi CNG",
      price: "₹9.4 Lakh* onwards",
      fuel: "CNG / Manual",
      mileage: "25.51 km/kg",
      engine: "1.5L K15C Dual Jet CNG",
      img: breeze8,
    },
    {
      id: 9,
      name: "Brezza ZXi+ Matte Edition",
      price: "₹14.3 Lakh* onwards",
      fuel: "Petrol / Automatic",
      mileage: "19.8 km/l",
      engine: "1.5L K15C Smart Hybrid",
      img: breeze9,
    },
    {
      id: 10,
      name: "Brezza ZXi++ Matte Edition",
      price: "₹15.3 Lakh* onwards",
      fuel: "Petrol / Automatic",
      mileage: "19.8 km/l",
      engine: "1.5L K15C Smart Hybrid",
      img: breeze10,
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
