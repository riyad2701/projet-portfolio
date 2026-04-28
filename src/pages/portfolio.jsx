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
          <Link className="nav-link" to="/services" target="_blank">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/portfolio" target="_blank">Portfolio</Link>
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
            <h1 className="fw-bold">Portfolio</h1>
            <p>Voici quelques-unes de mes réalisations.</p><br />
            <div className="blue-bar"></div><br /><br />
            </section>
            <section className="container">
            <div className="row justify-content-center text-center">
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
        </>
            )
}
  