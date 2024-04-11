import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import Arrowup from './components/Arrowup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Arrowup/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
