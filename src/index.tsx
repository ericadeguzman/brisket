import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter, Routes, Route, HashRouter, } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import BoilerPlate from './pages/BoilerPlate';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
    <Route path ="/" element={<App />} />
      <Route path ="/Contact" element={<Contact />} />
      <Route path ="/About" element={<About />} />
      <Route path ="/BoilerPlate" element={<BoilerPlate />} />
    </Routes>
    </HashRouter>
  </React.StrictMode>
);

