import swift1 from "../assets/swift1 (1).jpeg";
import swift2 from "../assets/swift1 (2).jpeg";
import swift3 from "../assets/swift1 (3).jpeg";
import swift from "../assets/swift.jpg";
import swift4 from "../assets/swift1 (4).jpeg";


import eritaga from "../assets/eritaga.jpg";
import "./NexaModelPage.css";

export default function SwiftCar() {
  const cars = [
    {
      id: 1,
      name: "Swift LXI",
      price: "₹8.5 Lakh* onwards",
      fuel: "Petrol / Manual",
      mileage: "22.38 km/l",
      engine: "1.2L K-Series Dual Jet",
      img: swift,
    },
    {
      id: 2,
      name: "Swift VXI",
      price: "₹10.5 Lakh* onwards",
      fuel: "Petrol / Manual",
      mileage: "22.56 km/l",
      engine: "1.2L K-Series Dual Jet",
      img: swift1,
    },
    {
      id: 3,
      name: "Swift ZXI",
      price: "₹6.6 Lakh* onwards",
      fuel: "Petrol / AMT",
      mileage: "22.8 km/l",
      engine: "1.2L K-Series Dual Jet",
      img: swift2,
    },
    {
      id: 4,
      name: "Swift ZXI+",
      price: "₹9.3 Lakh* onwards",
      fuel: "Petrol / AMT",
      mileage: "23.1 km/l",
      engine: "1.2L K-Series Dual Jet",
      img: swift3,
    },
    {
      id: 5,
      name: "Swift AMT",
      price: "₹11.3 Lakh* onwards",
      fuel: "Petrol / Automatic",
      mileage: "22.9 km/l",
      engine: "1.2L K-Series Dual Jet",
      img: swift4,
    },
  ];

  return (
    <div className="models-container">
      <h1>Swift Car Models</h1>
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
