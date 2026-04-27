import React, { useState, useEffect } from 'react';

const PortfolioModal = ({ isOpen, onClose }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isOpen) {
      // On récupère les données réelles de l'API
      fetch('https://api.github.com/users/github-john-doe') // Remplace par ton pseudo
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.error("Erreur:", err));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white border-secondary">
          <div className="modal-header border-secondary">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          
          <div className="modal-body p-4">
            {user ? (
              <div className="row">
                {/* Colonne Gauche : Avatar */}
                <div className="col-md-4 text-center">
                  <img 
                    src={user.avatar_url} 
                    alt="Avatar" 
                    className="img-fluid rounded shadow-lg mb-3"
                  />
                  <h4>{user.name || user.login}</h4>
                </div>
                
                {/* Colonne Droite : Infos du JSON */}
                <div className="col-md-8">
                  <p className="border-bottom border-secondary pb-2">
                    <i className="bi bi-info-circle me-2"></i>
                    <strong>Bio :</strong> <br/>
                    {user.bio || "Aucune bio disponible"}
                  </p>
                  
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      <strong>📦 Repositories :</strong> {user.public_repos}
                    </li>
                    <li className="mb-2">
                      <strong>👥 Followers :</strong> {user.followers}
                    </li>
                    <li className="mb-2">
                      <strong>🤝 Following :</strong> {user.following}
                    </li>
                  </ul>
                  
                  <a 
                    href={user.html_url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-outline-info btn-sm mt-3"
                  >
                    Voir le profil complet sur GitHub
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center py-5">
                <div className="spinner-border text-light" role="status"></div>
                <p className="mt-2">Chargement des données...</p>
              </div>
            )}
          </div>

          <div className="modal-footer border-secondary">
            <button className="btn btn-secondary" onClick={onClose}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;