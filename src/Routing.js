import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./home/HomeMain";
import "./styles/main.scss";
import "./styles/animation.scss";
import './styles/responsive.scss'
import Portfolio from "./portfolio/Portfolio";
import About from "./about-me/About";
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-me" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
