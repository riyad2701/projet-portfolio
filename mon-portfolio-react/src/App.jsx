import React, { useState } from 'react';
import './App.css';
import PortfolioModal from './PortfolioModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Mon Portfolio React</h1>
        <button 
          className="btn btn-primary mt-3" 
          onClick={() => setIsModalOpen(true)}
        >
          Voir mon profil GitHub
        </button>
      </header>

      {/* Ton composant Modale avec les fonctions de contrôle */}
      <PortfolioModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      {/* Tu peux rajouter tes sections de cartes ici plus tard */}
    </div>
  );
}

export default App;