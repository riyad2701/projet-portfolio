import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Services } from './pages/services';
import { Portfolio } from './pages/portfolio';
import { Contact } from './pages/contact';
import { MentionsLegales } from './pages/MentionsLegales';
import { useState } from 'react';
import './App.css';
import PortfolioModal from './PortfolioModal';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home openModal={() => setIsModalOpen(true)} />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/MentionsLegales" element={<MentionsLegales />} />
    </Routes>
    {isModalOpen && <PortfolioModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default App;