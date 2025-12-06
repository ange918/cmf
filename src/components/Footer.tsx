import { Link } from 'react-router-dom'
import { 
  HomeIcon, 
  InformationCircleIcon, 
  CubeIcon, 
  MapPinIcon, 
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-hq-info">
          <div className="hq-badge">
            <BuildingOffice2Icon className="hero-icon" />
            <span className="flag-emoji">🇫🇷</span>
            <span>Siège Social basé en France</span>
          </div>
          <div className="hq-locations">
            <div className="hq-location">
              <span className="flag-emoji">🇨🇮</span>
              <span>Côte d'Ivoire</span>
            </div>
            <div className="hq-location">
              <span className="flag-emoji">🇧🇯</span>
              <span>Bénin</span>
            </div>
            <div className="hq-location">
              <span className="flag-emoji">🇹🇬</span>
              <span>Togo</span>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <h3>CFM</h3>
            <p>
              Acteur clé de la pêche durable, aquaculture innovante et 
              distribution de produits aquatiques. Entreprise basée en France 
              avec sous-départements en Côte d'Ivoire, Bénin et Togo.
            </p>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/"><HomeIcon className="hero-icon" /> Accueil</Link></li>
              <li><Link to="/about"><InformationCircleIcon className="hero-icon" /> À propos</Link></li>
              <li><Link to="/products"><CubeIcon className="hero-icon" /> Produits</Link></li>
              <li><Link to="/agencies"><MapPinIcon className="hero-icon" /> Agences</Link></li>
              <li><Link to="/contact"><EnvelopeIcon className="hero-icon" /> Contact</Link></li>
              <li>
                <Link to="/documentation">
                  <DocumentTextIcon className="hero-icon" /> Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Produits</h4>
            <ul className="footer-links">
              <li><Link to="/poissons-nobles">Poissons nobles</Link></li>
              <li><Link to="/crustaces-coquillages">Crustacés & Coquillages</Link></li>
              <li><Link to="/equipement-aquacole">Équipements</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><EnvelopeIcon className="hero-icon" /> contact@comatra-fm.com</li>
              <li><PhoneIcon className="hero-icon" /> +229 XX XX XX XX</li>
              <li><MapPinIcon className="hero-icon" /> Zone Portuaire de Cotonou</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CFM. Tous droits réservés.</p>
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
