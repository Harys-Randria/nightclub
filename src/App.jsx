import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import Home from "./component/Pages/Home";
import Agenda from "./component/Pages/Agenda";
import Galerie from "./component/Pages/Galerie";
import Privatisation from "./component/Pages/Privatisation";
import Contact from "./component/Pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/privatisation" element={<Privatisation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
