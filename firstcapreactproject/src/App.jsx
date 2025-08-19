import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Specials from "./components/Specials.jsx";
import Ratings from "./components/Ratings.jsx";
import About from "./components/About.jsx";
import ReservationForm from "./components/ReservationForm.jsx";
import UnderConstruction from "./components/UnderConstruction.jsx";
import './App.css';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Specials />
        <Ratings />
        <About />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<UnderConstruction />} />
          <Route path="/menu" element={<UnderConstruction />} />
          <Route path="/order-online" element={<UnderConstruction />} />
          <Route path="/login" element={<UnderConstruction />} />
          <Route path="/reservations" element={<ReservationForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;