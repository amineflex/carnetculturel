import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css'

// Pages
import HomePage from "./pages/HomePage";
import PersoPage from "./pages/PersoPage";
import EcolePage from "./pages/EcolePage";
import BilanPage from "./pages/BilanPage";


// CC Perso
import ZeldaMM from './pages/perso/ZeldaMM';
import BreakingBad from './pages/perso/BreakingBad';
import ZeldaTotk from './pages/perso/ZeldaTotk';
import Oujda from './pages/perso/Oujda';

// CC École
import Songe from './pages/ecole/Songe';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perso" element={<PersoPage />} />
          <Route path="/ecole" element={<EcolePage />} />
          <Route path="/bilan" element={<BilanPage />} />
          
          <Route path="/perso/zeldamm" element={<ZeldaMM />} />
          <Route path="/perso/breakingbad" element={<BreakingBad />} />
          <Route path="/perso/zeldatotk" element={<ZeldaTotk />} />
          <Route path="/perso/oujda" element={<Oujda />} />
          
          <Route path="/ecole/songe" element={<Songe />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;