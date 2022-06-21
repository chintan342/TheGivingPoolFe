
import React from 'react';
import './Common.css';
import './component/BuyToken/Buy.css';
import './Responsive.css';
import './component/LandingPage/LandingPage.css';
import './component/Whitepaper/Whitepaper.css';
import './component/Tokenomics/Tokenomics.css';
import './component/Roadmap/Roadmap.css';


import Home from './component/Home/Home';
import LandingPage from './component/LandingPage/LandingPage';
import Whitepaper from './component/Whitepaper/Whitepaper';
import Tokenomics from './component/Tokenomics/Tokenomics';
import Buy from './component/BuyToken/Buy';
import Roadmap from './component/Roadmap/Roadmap';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="LandingPage" element={<LandingPage />} />
        <Route path="Whitepaper" element={<Whitepaper />} />
        <Route path="Tokenomics" element={<Tokenomics />} />
        <Route path="Buy" element={<Buy />} />
        <Route path="Roadmap" element={<Roadmap />} />

      </Routes>
    </>
  );
}

export default App;
