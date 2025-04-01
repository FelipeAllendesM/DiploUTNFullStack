import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';

import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import ContactoPage from './pages/ContactoPage';
import BeneficiosPage from './pages/BeneficiosPage';
import GaleriaPage from './pages/GaleriaPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="beneficios" element={<BeneficiosPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;