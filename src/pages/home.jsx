import { Link } from 'react-router-dom';
import johnDoeImg from '../images/john-doe-about.jpg';
import freshFoodImg from '../images/portfolio/fresh-food.jpg';
import restaurantJaponaisImg from '../images/portfolio/restaurant-japonais.jpg'
import espaceBienEtreImg from '../images/portfolio/espace-bien-etre.jpg'
import seoImg from '../images/portfolio/seo.jpg'
import coderImg from '../images/portfolio/coder.jpg'
import screensImg from '../images/portfolio/screens.jpg'
export const Home = () => {
    return (
        <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <a className="navbar-brand text-uppercase" href="#john-doe">John Doe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav text-uppercase">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
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
        <Link className="nav-link" to="/mentions legales" target="_blank">Mentions Légales</Link>
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
        </div>
    </header>
    </section>
    <main>
         <section className="container my-5 p-5 bg-white shadow-sm">
            <div className="row">
                <div className="col md-6">
                    <h2 className="section-title">A propos</h2>
                    <img src={johnDoeImg} alt="john doe" />
                    <div className="lorem-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, labore laboriosam repudiandae, consequuntur consectetur omnis eligendi soluta pariatur provident beatae dolorum suscipit sapiente maiores ab explicabo corrupti! Exercitationem, consequuntur sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, labore laboriosam repudiandae, consequuntur consectetur omnis eligendi soluta pariatur provident beatae dolorum suscipit sapiente maiores ab explicabo corrupti! Exercitationem, consequuntur sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, labore laboriosam repudiandae, consequuntur consectetur omnis eligendi soluta pariatur provident beatae dolorum suscipit sapiente maiores ab explicabo corrupti! Exercitationem, consequuntur sint?</p>
                    </div>
                </div>
                <div className="col md-6">
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
<footer className="fixed-bottom">
    <nav className="navbar navbar-dark bg-dark py-4">
        <div className="container">
            <div className="row w-100">
                <div className="col-md-4 text-white">
                    <h5 className="text-uppercase mb-2">John Doe</h5>
                    <address className="small">
                        40 rue Laure Diebold<br />
                        69009 Lyon, France<br />
                        10 20 30 40 50<br />
                        john.doe@gmail.com
                    </address>
                    <div className="footer-social-icons">
                    <div className="mt-3">
                      <a href="https://github.com/riyad2701/projet-portfolio" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></a>
                        <a href="https://x.com/?lang=fr" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg></a>
<a href="https://www.linkedin.com/feed/" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></a>
                    </div>
                </div>
                </div>
                <div className="col-md-4 text-white">
                    <h5 className="text-uppercase mb-2">Liens utiles</h5>
                    <ul className="list-unstyled small">
                        <li><a href="/home" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Accueil</a></li>
                        <li><a href="/services" target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Services</a></li>
                        <li><a href="/portfolio" target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Portfolio</a></li>
                        <li><a href="/contact" target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Me contacter</a></li>
                        <li><a href="/mentions legales" target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Mentions légales</a></li>
                    </ul>
                </div>
                <div className="col-md-4 text-white">
                    <h5 className="text-uppercase mb-2">Mes dernières réalisations</h5>
                    <ul className="list-unstyled small">
                        <li><a href={freshFoodImg} target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Fresh Food</a></li>
                        <li><a href={restaurantJaponaisImg} target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Restaurant Akira</a></li>
                        <li><a href={espaceBienEtreImg} target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Espace bien-être</a></li>
                        <li><a href={seoImg} target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> SEO</a></li>
                        <li><a href={coderImg} target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Création d'une API</a></li>
                        <li><a href={screensImg} target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Maquette d'un site</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</footer>
        </>
    )
}
  