import { Link } from 'react-router-dom';
import bannerImg from '../images/banner.jpg';
import freshFoodImg from '../images/portfolio/fresh-food.jpg';
import restaurantJaponaisImg from '../images/portfolio/restaurant-japonais.jpg'
import espaceBienEtreImg from '../images/portfolio/espace-bien-etre.jpg'
import seoImg from '../images/portfolio/seo.jpg'
import coderImg from '../images/portfolio/coder.jpg'
import screensImg from '../images/portfolio/screens.jpg'
export const Portfolio = () => {
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
<section id="portfolio-section" className="portfolio-header text-center my-5">
        <img src={bannerImg} alt="banner" />
            <h1 className="fw-bold">Portfolio</h1>
            <p>Voici quelques-unes de mes réalisations.</p><br />
            <div className="blue-bar"></div><br /><br />
            <section className="container">
            <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-5">
        <div className="card">
        <img src={freshFoodImg} className="card-img-top" alt="Fresh Food" />
        <div className="card-body">
        <h5 className="card-title">Fresh food</h5>
        <p className="card-text">Site de vente de produits frais en ligne</p>
        <a href={freshFoodImg} target="_blank" className="btn btn-primary">Voir le site</a>
        </div>
        <div className="card-footer text-body-secondary">
          Site réalisé avec PHP et MySQL
        </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
        <div className="card">
        <img src={restaurantJaponaisImg} className="card-img-top" alt="Restaurant Akira" />
        <div className="card-body">
        <h5 className="card-title">Restaurant Akira</h5>
        <p className="card-text">Site de vente de produits frais en ligne</p>
        <a href={restaurantJaponaisImg} target="_blank" className="btn btn-primary">Voir le site</a>
        </div>
        <div className="card-footer text-body-secondary">
            Site réalisé avec WordPress
        </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
        <div className="card">
          <img src={espaceBienEtreImg} className="card-img-top" alt="Espace bien-être" />
        <div className="card-body">
        <h5 className="card-title">Espace bien-être</h5>
        <p className="card-text">Site de vente de produits frais en ligne</p>
          <a href={espaceBienEtreImg} target="_blank" className="btn btn-primary">Voir le site</a>
        </div>
        <div className="card-footer text-body-secondary">
        Site réalisé avec LARAVEL
        </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
            <div className="card h-100">
  <img src={seoImg} className="card-img-top" alt="SEO" />
  <div className="card-body">
    <h5 className="card-title">SEO</h5>
    <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
    <a href={seoImg} target="_blank" className="btn btn-primary">Voir le site</a>
  </div>
<div className="card-footer text-body-secondary">
    Utilisation des outils SEO
  </div>
  </div>
  </div>
  <div className="col-md-6 col-lg-4 mb-5">
            <div className="card h-100">
  <img src={coderImg} className="card-img-top" alt="Création d'une API" />
  <div className="card-body">
    <h5 className="card-title">Création d'une API</h5>
    <p className="card-text">Création d'une API RESTFULL publique</p>
    <a href={coderImg} target="_blank" className="btn btn-primary">Voir le site</a>
  </div>
<div className="card-footer text-body-secondary">
    PHP - SYMFONY
  </div>
  </div>
  </div>
  <div className="col-md-6 col-lg-4 mb-5">
            <div className="card h-100">
  <img src={screensImg} className="card-img-top" alt="Maquette d'un site web" />
  <div className="card-body">
    <h5 className="card-title">Maquette d'un site web</h5>
    <p className="card-text">Création du prototype d'un site</p>
    <a href={screensImg} target="_blank" className="btn btn-primary">Voir le site</a>
  </div>
<div className="card-footer text-body-secondary">
    Site réalisé avec FIGMA
  </div>
  </div>
  </div>
  </div>
  </section>
      </section>   
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
                         <li><a href="/" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Accueil</a></li>
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
  