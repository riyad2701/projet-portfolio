import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Services } from './pages/services';
import { Portfolio } from './pages/portfolio';
import { Contact } from './pages/contact';
import { MentionsLegales } from './pages/mentions legales';
import { useState } from 'react';
import './App.css';
import PortfolioModal from './PortfolioModal';



function App() {
  console.log
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions legales" element={<MentionsLegales />} />
    </Routes>
  );
}

export default App;