import { GlobeAltIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

function Partners() {
    return (
        <section className="partners-section section">
            <div className="container">
                <h2 className="section-title">
                    Nos Partenaires & Collaborations
                </h2>
                <p className="section-subtitle">
                    CFM collabore avec des partenaires européens, africains et
                    internationaux pour garantir l'excellence de nos produits et
                    services. Notre réseau s'étend sur trois continents,
                    favorisant l'innovation et le développement durable.
                </p>

                <div className="partners-grid">
                    <div className="partner-category">
                        <div className="partner-icon">
                            <GlobeAltIcon className="heroicon" />
                        </div>
                        <h4>Partenaires Européens</h4>
                        <p>
                            Collaborations avec des instituts de recherche et
                            entreprises en France, Espagne et Portugal pour
                            l'innovation technologique.
                        </p>
                    </div>

                    <div className="partner-category">
                        <div className="partner-icon">
                            <svg
                                className="heroicon"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <h4>Partenaires Africains</h4>
                        <p>
                            Réseau solide Afrique de l'ouest pour une
                            distribution efficace et locale.
                        </p>
                    </div>

                    <div className="partner-category">
                        <div className="partner-icon">
                            <GlobeAltIcon className="heroicon" />
                        </div>
                        <h4>Collaborations Internationales</h4>
                        <p>
                            Partenariats avec des organisations mondiales pour
                            les standards de qualité et la pêche durable.
                        </p>
                    </div>
                </div>

                <div className="partner-features">
                    <div className="partner-feature">
                        <CheckCircleIcon className="heroicon" />
                        <span>Certifications internationales</span>
                    </div>
                    <div className="partner-feature">
                        <CheckCircleIcon className="heroicon" />
                        <span>Transfert de technologie</span>
                    </div>
                    <div className="partner-feature">
                        <CheckCircleIcon className="heroicon" />
                        <span>Formation continue</span>
                    </div>
                    <div className="partner-feature">
                        <CheckCircleIcon className="heroicon" />
                        <span>Recherche & Développement</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
