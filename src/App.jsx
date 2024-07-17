// React Router imports
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Page imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";

// React imports
import React from 'react';

// Component Imports
import Navbar from "./components/NavBar";

// Main CSS Import
import './main.css'

function App() {

  return (
    <Router>
      <div id="webpage">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
