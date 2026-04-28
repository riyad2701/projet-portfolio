import { Link } from 'react-router-dom';
import bannerImg from '../images/banner.jpg';
import freshFoodImg from '../images/portfolio/fresh-food.jpg';
import restaurantJaponaisImg from '../images/portfolio/restaurant-japonais.jpg'
import espaceBienEtreImg from '../images/portfolio/espace-bien-etre.jpg'
import seoImg from '../images/portfolio/seo.jpg'
import coderImg from '../images/portfolio/coder.jpg'
import screensImg from '../images/portfolio/screens.jpg'
export const Services = () => {
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
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/services" target="_blank">Services</Link>
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
    <section id="services-section">
        <img src={bannerImg} alt="banner" />
        <section className="services-header text-center my-5">
            <h1 className="fw-bold">Mon offre de services</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
            <div className="blue-bar"></div>
        </section>
        <section className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
        <div className="card d-flex flex-column align-items-center pb-3 h-100">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="bi bi-brush mt-3" viewBox="0 0 16 16">
  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"/>
</svg>
  <div className="card-body">
     <h2 className="h5 fw-bold">UX Design</h2>
                <p className="small text-muted">L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, ect.)en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
  </div>
</div>
</div>
 <div className="col-md-6 col-lg-4 mb-5">
        <div className="card d-flex flex-column align-items-center pb-3 h-100">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="bi bi-code-slash mt-3" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
</svg>
  <div className="card-body">
     <h2 className="h5 fw-bold">Développement web</h2>
                <p className="small text-muted">Le développement des sites web consiste à créer des sites internet en utilisant des langages de programmation (jsx, CSS, JavaScript, PHP, ect.) et des frameworks (Bootstrap, React, Angular, ect.)</p>
  </div>
</div>
</div>
 <div className="col-md-6 col-lg-4 mb-5">
        <div className="card d-flex flex-column align-items-center pb-3 h-100">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="bi bi-search mt-3" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
  <div className="card-body">
     <h2 className="h5 fw-bold">Référencement</h2>
                <p className="small text-muted">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, ect.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
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
                        <li><a href="/MentionsLegales" target="_blank" className="text-white text-decoration-none"><i className="bi bi-chevron-right small"></i> Mentions légales</a></li>
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