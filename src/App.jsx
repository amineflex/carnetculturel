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
import Lucie from './pages/perso/Lucie';

// CC École
import Songe from './pages/ecole/Songe';
import Simone from './pages/ecole/Simone';
import Mercure from './pages/ecole/Mercure';
import Simple from './pages/ecole/Simple';
import Huisclos from './pages/ecole/HuisClos';


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
          <Route path="/perso/lucie" element={<Lucie />} />
          
          <Route path="/ecole/songe" element={<Songe />} />
          <Route path="/ecole/simone" element={<Simone />} />
          <Route path="/ecole/mercure" element={<Mercure />} />
          <Route path="/ecole/simple" element={<Simple />} />
          <Route path="/ecole/huisclos" element={<Huisclos />} />
          
          <Route path='*' element={<h1>404</h1>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;