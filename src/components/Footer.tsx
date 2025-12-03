import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-hq-info">
          <div className="hq-badge">
            <i className='bx bxs-building'></i>
            <span>Siège Social basé en France</span>
          </div>
          <div className="hq-locations">
            <div className="hq-location">
              <i className='bx bxs-flag-alt' style={{ color: '#FF9500' }}></i>
              <span>Côte d'Ivoire</span>
            </div>
            <div className="hq-location">
              <i className='bx bxs-flag-alt' style={{ color: '#FCD116' }}></i>
              <span>Bénin</span>
            </div>
            <div className="hq-location">
              <i className='bx bxs-flag-alt' style={{ color: '#006A4E' }}></i>
              <span>Togo</span>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <h3>COMATRA FISH MARINE</h3>
            <p>
              Acteur clé de la pêche durable, aquaculture innovante et 
              distribution de produits aquatiques. Entreprise basée en France 
              avec sous-départements en Côte d'Ivoire, Bénin et Togo.
            </p>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/"><i className='bx bx-home'></i> Accueil</Link></li>
              <li><Link to="/about"><i className='bx bx-info-circle'></i> À propos</Link></li>
              <li><Link to="/products"><i className='bx bx-package'></i> Produits</Link></li>
              <li><Link to="/agencies"><i className='bx bx-map'></i> Agences</Link></li>
              <li><Link to="/contact"><i className='bx bx-envelope'></i> Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Produits</h4>
            <ul className="footer-links">
              <li><Link to="/poissons-nobles"><i className='bx bx-water'></i> Poissons nobles</Link></li>
              <li><Link to="/crustaces-coquillages"><i className='bx bxs-droplet'></i> Crustacés & Coquillages</Link></li>
              <li><Link to="/equipement-aquacole"><i className='bx bx-cog'></i> Équipements</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><i className='bx bx-envelope'></i> contact@comatra-fm.com</li>
              <li><i className='bx bx-phone'></i> +229 XX XX XX XX</li>
              <li><i className='bx bx-map-pin'></i> Zone Portuaire de Cotonou</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} COMATRA FISH MARINE. Tous droits réservés.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className='bx bxl-facebook'></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className='bx bxl-instagram'></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className='bx bxl-twitter'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
