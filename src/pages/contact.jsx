import { Link } from 'react-router-dom';
import freshFoodImg from '../images/portfolio/fresh-food.jpg';
import restaurantJaponaisImg from '../images/portfolio/restaurant-japonais.jpg'
import espaceBienEtreImg from '../images/portfolio/espace-bien-etre.jpg'
import seoImg from '../images/portfolio/seo.jpg'
import coderImg from '../images/portfolio/coder.jpg'
import screensImg from '../images/portfolio/screens.jpg'
export const Contact = () => {
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
        <Link className="nav-link" to="/portfolio" target="_blank">Portfolio</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/contact" target="_blank">Contact</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/MentionsLegales" target="_blank">Mentions Légales</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 <section id="contact-section" className="contact-header text-center my-5">
        <h1 className="fw-bold">Contact</h1>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p><br />
        <div className="blue-bar"></div>
    </section>
        <section className="container my-5 p-5 bg-white shadow-sm">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="section-title">Formulaire de contact</h3>
                    <form action="index.html" method="post">
                        <div className="mb-0">
                            <label htmlFor="nom" className="form-label"></label>
                            <input type="text" className="form-control form-control-lg" placeholder="Votre nom" id="nom" required />
                        </div>
                        <div className="mb-0">
                            <label htmlFor="email" className="form-label"></label>
                            <input type="text" className="form-control form-control-lg" placeholder="Votre adresse email" id="email" required />
                        </div>
                        <div className="mb-0">
                            <label htmlFor="numero" className="form-label"></label>
                            <input type="text" className="form-control form-control-lg" placeholder="Votre numéro de téléphone" id="phone" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sujet" className="form-label"></label>
                            <input type="text" className="form-control form-control-lg" placeholder="Sujet" id="sujet" required />
                        </div>
                        <div className="mb-10">
                            <label htmlFor="message" className="form-label"></label>
                            <textarea cols="58" rows="10" placeholder="Votre message" id="message" required></textarea>
                        </div>
                        <div className="text-center">
                        <button type="submit" className="btn btn-info text-light">Envoyer</button>
                        </div>
                    </form>
                </div>
                 <div className="col-md-6">
                    <h3 className="section-title">Mes coordonnées</h3>
                    <adresse>
                        <p>John Doe<br /> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
</svg> 40 rue Laure Diebold<br /> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg> 69009 Lyon<br /> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg> 10 20 30 40 50<br /> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg> john.doe@gmail.com<br /></p>
                    </adresse>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540556!2d4.7964039760097945!3d45.77866571240249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1775480337812!5m2!1sfr!2sfr" width="550" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
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