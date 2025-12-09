import { Link } from 'react-router-dom'
import {
    HomeIcon,
    InformationCircleIcon,
    CubeIcon,
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon,
    DocumentTextIcon,
    BuildingOffice2Icon,
} from '@heroicons/react/24/outline'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-hq-info">
                    <div className="hq-badge">
                        <BuildingOffice2Icon className="heroicon" />
                        <span className="flag-emoji">🇫🇷</span>
                        <span>Siège Social basé en France</span>
                    </div>
                    <div className="hq-locations">
                        <div className="hq-location">
                            <span className="flag-emoji">🇨🇮</span>
                            <span>Côte d'Ivoire</span>
                        </div>
                    </div>
                </div>

                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>CFM</h3>
                        <p>
                            Acteur clé de la pêche durable, aquaculture
                            innovante et distribution de produits aquatiques.
                            Entreprise basée en France avec sous-départements en
                            Côte d'Ivoire .
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Navigation</h4>
                        <ul className="footer-links">
                            <li>
                                <Link to="/">
                                    <HomeIcon className="heroicon" /> Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <InformationCircleIcon className="heroicon" />{' '}
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link to="/products">
                                    <CubeIcon className="heroicon" /> Produits
                                </Link>
                            </li>
                            <li>
                                <Link to="/agencies">
                                    <MapPinIcon className="heroicon" /> Agences
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <EnvelopeIcon className="heroicon" />{' '}
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/documentation">
                                    <DocumentTextIcon className="heroicon" />{' '}
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Produits</h4>
                        <ul className="footer-links">
                            <li>
                                <Link to="/poissons-nobles">
                                    Poissons nobles
                                </Link>
                            </li>
                            <li>
                                <Link to="/crustaces-coquillages">
                                    Crustacés & Coquillages
                                </Link>
                            </li>
                            <li>
                                <Link to="/equipement-aquacole">
                                    Équipements
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul className="footer-links">
                            <li>
                                <EnvelopeIcon className="heroicon" />{' '}
                                contact@comatra-fm.com
                            </li>
                            <li>
                                <PhoneIcon className="heroicon" /> + +33 6 03 18
                                15 00
                            </li>
                            <li>
                                <MapPinIcon className="heroicon" />
                                71/73 Avenue Des Ternes 75017 Paris France
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} CFM. Tous droits réservés.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="bx bxl-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
