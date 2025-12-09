import { Link } from 'react-router-dom'
import {
    InformationCircleIcon,
    EnvelopeIcon,
    MapPinIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-background">
                <img
                    src="/herobackground.jpeg"
                    alt="CFM - Bateau de pêche"
                    className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">CFM</h1>
                <p className="hero-subtitle">
                    Qualité, durabilité et innovation pour une alimentation
                    halieutique saine.
                    <br />
                    <br />
                    Acteur clé de la pêche durable, aquaculture innovante et
                    distribution de produits aquatiques en Côte d'Ivoire .
                </p>
                <div className="hero-buttons">
                    <Link to="/about" className="btn btn-primary">
                        <InformationCircleIcon className="heroicon" /> En Savoir
                        Plus
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        <EnvelopeIcon className="heroicon" /> Nous contacter
                    </Link>
                </div>
            </div>

            <div className="hero-highlights">
                <div className="hero-highlight-card">
                    <div className="highlight-icon">
                        <MapPinIcon className="heroicon" />
                    </div>
                    <div className="highlight-content">
                        <h4>2 Agences</h4>
                        <p>France & Afrique de l'Ouest</p>
                    </div>
                </div>
                <div className="hero-highlight-card">
                    <div className="highlight-icon">
                        <ShieldCheckIcon className="heroicon" />
                    </div>
                    <div className="highlight-content">
                        <h4>Qualité Certifiée</h4>
                        <p>Normes internationales</p>
                    </div>
                </div>
                <div className="hero-highlight-card">
                    <div className="highlight-icon">
                        <svg
                            className="heroicon"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                            />
                        </svg>
                    </div>
                    <div className="highlight-content">
                        <h4>Pêche Durable</h4>
                        <p>Respect de l'environnement</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
