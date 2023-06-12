import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css'

// Pages
import HomePage from "./pages/HomePage";
import PersoPage from "./pages/PersoPage";
import EcolePage from "./pages/EcolePage";
import BilanPage from "./pages/BilanPage";


// CC Perso
import ZeldaMM from './pages/persos/ZeldaMM';
import BreakingBad from './pages/persos/BreakingBad';
import ZeldaTotk from './pages/persos/ZeldaTotk';

// CC École



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perso" element={<PersoPage />} />
          <Route path="/ecole" element={<EcolePage />} />
          <Route path="/bilan" element={<BilanPage />} />
          
          <Route path="/persos/zeldamm" element={<ZeldaMM />} />
          <Route path="/persos/breakingbad" element={<BreakingBad />} />
          <Route path="/persos/zeldatotk" element={<ZeldaTotk />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;