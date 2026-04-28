import { Link } from 'react-router-dom';
import johnDoeImg from '../images/john-doe-about.jpg';
export const Home = ({ openModal }) => {
    return (
        <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <span className="navbar-brand mbo-0 h1 fw'bold text-uppercase">John Doe</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav text-uppercase">
        <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services" target="_blank">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/portfolio" target="_blank">Portfolio</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact" target="_blank">Contact</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/MentionsLegales" target="_blank">Mentions Légales</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<section id="home-section">
        <header className="hero-section">
        <div className="hero-overlay">
        </div>
        <div className="hero-content text-center">
            <h1 className="=display-3 fw-bold text-white">Bonjour, je suis John Doe</h1>
            <p className="h2 text-white mb-4">Développeur web full stack</p>
            <button className="btn btn-danger mt-3"
            onClick={openModal}>En savoir plus</button>
        </div>
    </header>
    </section>
    <main>
         <section className="container my-5 p-5 bg-white shadow-sm">
            <div className="row">
                <div className="col sm-6">
                    <h2 className="section-title">A propos</h2>
                    <img src={johnDoeImg} alt="john doe" className="img-fluid" />
                    <div className="lorem-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, labore laboriosam repudiandae, consequuntur consectetur omnis eligendi soluta pariatur provident beatae dolorum suscipit sapiente maiores ab explicabo corrupti! Exercitationem, consequuntur sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, labore laboriosam repudiandae, consequuntur consectetur omnis eligendi soluta pariatur provident beatae dolorum suscipit sapiente maiores ab explicabo corrupti! Exercitationem, consequuntur sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, labore laboriosam repudiandae, consequuntur consectetur omnis eligendi soluta pariatur provident beatae dolorum suscipit sapiente maiores ab explicabo corrupti! Exercitationem, consequuntur sint?</p>
                    </div>
                </div>
                <div className="col sm-6">
                    <h2 className="section-title">Mes compétences</h2>
                    <div className="skill-item mt-4">
                        <p className="mb-1">jsx5 90%</p>
                        <div className="progress">
                            <div className="progress-bar bg-danger" style={{ width: '90%' }}>
                            </div>
                        </div>
                        </div>
                        <div className="skill-item mt-3">
                        <p className="mb-1">CSS3 80%</p>
                        <div className="progress">
                            <div className="progress-bar bg-info" style={{ width: '80%' }}>
                            </div>
                        </div>
                        </div>
                        <div className="skill-item mt-3">
                        <p className="mb-1">JAVASCRIPT 70%</p>
                        <div className="progress">
                            <div className="progress-bar bg-warning" style={{ width: '70%' }}>
                            </div>
                        </div>
                        </div>
                        <div className="skill-item mt-3">
                        <p className="mb-1">PHP 60%</p>
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{ width: '60%' }}>
                            </div>
                        </div>
                        </div>
                        <div className="skill-item mt-3">
                        <p className="mb-1">REACT 50%</p>
                        <div className="progress">
                            <div className="progress-bar bg-primary" style={{ width: '50%' }}>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </section>
    </main>
        </>
    )
}
  