import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NexaPage from "./components/NexaPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import NexaCar from "./components/NexaCar";
import SwiftPage from "./components/SwiftPage";
import SwiftCar from "./components/SwiftCar";
import GrandPage from "./components/GrandPage";
import GrandVitaraCar from "./components/GrandVitaraCar";
import BreezeCar from "./components/BreezeCar";
import BreezePage from "./components/BreezePage";
import ImportantCustomerInfo from "./components/ImporantCustomerInfo";
import MdsPage from "./components/MdsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/ImportantCustomerInfo"
          element={<ImportantCustomerInfo />}
        />

        <Route path="/NexaPage" element={<NexaPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/NexaCar" element={<NexaCar />} />
        <Route path="/SwiftPage" element={<SwiftPage />} />
        <Route path="/SwiftCar" element={<SwiftCar />} />
        <Route path="/GrandPage" element={<GrandPage />} />
        <Route path="/GrandVitaraCar" element={<GrandVitaraCar />} />
        <Route path="/BreezeCar" element={<BreezeCar />} />
        <Route path="/BreezePage" element={<BreezePage />} />
        <Route path="/MdsPage" element={<MdsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
