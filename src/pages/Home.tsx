import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowRightIcon,
    TruckIcon,
    CubeIcon,
    ClockIcon,
    ShieldCheckIcon,
    GlobeAltIcon,
    ClipboardDocumentCheckIcon,
    EnvelopeIcon,
    Cog6ToothIcon,
} from '@heroicons/react/24/outline'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import VideoSection from '../components/VideoSection'
import Partners from '../components/Partners'
import AgencyCard from '../components/AgencyCard'

const allProducts = [
    {
        name: 'Dorade royale',
        scientificName: 'Sparus aurata',
        image: 'dorade.jpg',
        description:
            'Poisson noble méditerranéen à la chair fine et délicate. Idéal pour les grillades et cuissons au four.',
        category: 'Poissons Marins',
    },
    {
        name: 'Crevette géante tigrée',
        scientificName: 'Penaeus monodon',
        image: 'gamba.jpeg',
        description:
            'La reine des crevettes, avec sa chair ferme et sucrée. Parfaite pour les grillades et les plats gastronomiques.',
        category: 'Crustacés',
    },
    {
        name: 'Tilapia (souche améliorée)',
        scientificName: 'Oreochromis niloticus',
        image: 'tilapia.jpg',
        description:
            'Élevé dans nos installations aquacoles certifiées, ce tilapia du Nil offre une qualité supérieure.',
        category: "Poissons d'Eau Douce",
    },
    {
        name: 'Homard',
        scientificName: 'Homarus',
        image: 'homard.jpg',
        description:
            "Le roi des crustacés, chair fine et goût exceptionnel pour les repas d'exception.",
        category: 'Crustacés',
    },
    {
        name: 'Mérou',
        scientificName: 'Epinephelus aeneus',
        image: 'merou.jpg',
        description:
            'Poisson massif à la chair blanche et ferme, parfait pour les plats en sauce.',
        category: 'Poissons Marins',
    },
    {
        name: 'Langoustine',
        scientificName: 'Nephrops norvegicus',
        image: 'langoustine.jpg',
        description:
            'Délicate et raffinée, la langoustine est un produit de luxe pour les grandes occasions.',
        category: 'Crustacés',
    },
    {
        name: 'Cages flottantes',
        image: '/structure.jpeg',
        description:
            "Cages marines robustes pour l'élevage en mer, résistantes aux conditions météorologiques extrêmes.",
        category: 'Équipement Aquacole',
    },
    {
        name: 'Huître',
        scientificName: 'Ostreidae',
        image: 'huitres.jpg',
        description:
            'Huîtres fraîches de qualité supérieure, élevées dans nos parcs ostréicoles.',
        category: 'Crustacés',
    },
]

const products = [
    {
        image: 'poisson.jpg',
        title: 'Poissons nobles',
        description:
            'Maigre, daurade, carangue, tilapia, silures de haute qualité',
        link: '/poissons-nobles',
        iconType: 'fish',
    },
    {
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
        title: 'Crustacés & Coquillages',
        description: 'Sélection premium de produits de la mer',
        link: '/crustaces-coquillages',
        iconType: 'shellfish',
    },
    {
        image: 'aquacole.jpg',
        title: 'Équipements & Aliments',
        description: "Solutions complètes pour l'aquaculture",
        link: '/equipement-aquacole',
        iconType: 'equipment',
    },
]

const agencies = [
    {
        image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        title: 'Cotonou, Bénin',
        address: 'Zone Portuaire de Cotonou, Avenue Jean-Paul II',
        phone: '+229 XX XX XX XX',
        hours: 'Lun-Ven: 7h-18h, Sam: 7h-13h',
    },
    {
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        title: 'Lomé, Togo',
        address: 'Port Autonome de Lomé, Avenue du 24 janvier',
        phone: '+228 XX XX XX XX',
        hours: 'Lun-Ven: 7h-18h, Sam: 7h-13h',
    },
]

const FishIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
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
)

const ShellfishIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
    </svg>
)

const ThermometerIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m0 0v.01M12 3a3 3 0 00-3 3v8.268a5.5 5.5 0 106 0V6a3 3 0 00-3-3z"
        />
    </svg>
)

function Home() {
    const sectionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const fadeElements = sectionsRef.current?.querySelectorAll('.fade-in')
        fadeElements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const renderProductIcon = (iconType: string) => {
        switch (iconType) {
            case 'fish':
                return <FishIcon className="heroicon" />
            case 'shellfish':
                return <ShellfishIcon className="heroicon" />
            case 'equipment':
                return <Cog6ToothIcon className="heroicon" />
            default:
                return <CubeIcon className="heroicon" />
        }
    }

    return (
        <div ref={sectionsRef}>
            <Hero />

            <AboutSection />

            <VideoSection />

            <section className="products-section section">
                <div className="container">
                    <h2 className="section-title">Produits & Services</h2>
                    <p className="section-subtitle">
                        Une gamme complète de produits aquatiques nobles et de
                        services spécialisés
                    </p>
                    <div className="products-grid">
                        {products.map((product, index) => (
                            <div key={index} className="fade-in">
                                <div className="product-card">
                                    <div className="product-image">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                        />
                                        <div className="product-icon-badge">
                                            {renderProductIcon(
                                                product.iconType
                                            )}
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3>{product.title}</h3>
                                        <p>{product.description}</p>
                                        <Link
                                            to={product.link}
                                            className="btn-learn-more">
                                            <ArrowRightIcon className="heroicon" />{' '}
                                            En savoir plus
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="services-section section">
                <div className="container">
                    <h2 className="section-title">Services annexes</h2>
                    <div className="services-grid">
                        <div className="service-card fade-in">
                            <div className="service-icon">
                                <TruckIcon className="heroicon" />
                            </div>
                            <h4>Logistique</h4>
                            <p>
                                Transport spécialisé et sécurisé pour produits
                                frais
                            </p>
                        </div>
                        <div className="service-card fade-in">
                            <div className="service-icon">
                                <CubeIcon className="heroicon" />
                            </div>
                            <h4>Conditionnement</h4>
                            <p>
                                Emballage professionnel respectant la chaîne du
                                froid
                            </p>
                        </div>
                        <div className="service-card fade-in">
                            <div className="service-icon">
                                <ClockIcon className="heroicon" />
                            </div>
                            <h4>Livraison</h4>
                            <p>
                                Livraison sous température contrôlée dans les
                                délais
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="all-products-section section">
                <div className="container">
                    <h2 className="section-title">Nos Produits</h2>
                    <p className="section-subtitle">
                        Découvrez notre sélection complète de produits de
                        qualité premium
                    </p>
                    <div className="alternating-products">
                        {allProducts.map((product, index) => (
                            <div
                                key={index}
                                className={`alternating-product-card fade-in ${
                                    index % 2 === 1 ? 'reversed' : ''
                                }`}>
                                <div className="alternating-product-image">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                                <div className="alternating-product-content">
                                    <span className="product-category-badge">
                                        {product.category}
                                    </span>
                                    <h3>{product.name}</h3>
                                    {product.scientificName && (
                                        <span className="scientific-name">
                                            {product.scientificName}
                                        </span>
                                    )}
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="agencies-section section">
                <div className="container">
                    <h2 className="section-title">Nos agences</h2>
                    <p className="section-subtitle">
                        Présents en France et dans 3 pays d'Afrique de l'Ouest
                        pour vous servir au plus près
                    </p>
                    <div className="agencies-grid">
                        {agencies.map((agency, index) => (
                            <div key={index} className="fade-in">
                                <AgencyCard {...agency} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">Ce que disent nos clients</h2>
                    <p className="section-subtitle">
                        Découvrez les témoignages de nos partenaires et clients
                        satisfaits
                    </p>
                    <div className="testimonials-grid">
                        <div className="testimonial-card fade-in">
                            <p className="testimonial-text">
                                CFM est un partenaire de confiance. La qualité
                                de leurs produits et leur professionnalisme nous
                                permettent de garantir l'excellence à nos
                                clients.
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">JD</div>
                                <div className="author-info">
                                    <h5>Jean Dupont</h5>
                                    <span>Directeur, Restaurant Le Marin</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card fade-in">
                            <p className="testimonial-text">
                                Leur engagement pour une pêche durable et
                                responsable correspond parfaitement à nos
                                valeurs. Une collaboration exemplaire depuis
                                plus de 5 ans.
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">AK</div>
                                <div className="author-info">
                                    <h5>Aminata Koné</h5>
                                    <span>
                                        Responsable achats, Supermarché Océan
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card fade-in">
                            <p className="testimonial-text">
                                Service impeccable et produits toujours frais.
                                CFM est devenu notre fournisseur principal pour
                                tous nos besoins en produits de la mer.
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">PB</div>
                                <div className="author-info">
                                    <h5>Pierre Beaumont</h5>
                                    <span>Chef exécutif, Hôtel Lagune</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="certifications-section">
                <div className="container">
                    <h2 className="section-title">Nos Garanties</h2>
                    <p className="section-subtitle">
                        Des engagements concrets pour une qualité irréprochable
                    </p>
                    <div className="certifications-grid">
                        <div className="certification-card fade-in">
                            <div className="certification-icon">
                                <ShieldCheckIcon className="heroicon" />
                            </div>
                            <h4>Qualité Certifiée</h4>
                            <p>
                                Produits conformes aux normes sanitaires
                                internationales
                            </p>
                        </div>
                        <div className="certification-card fade-in">
                            <div className="certification-icon">
                                <ThermometerIcon className="heroicon" />
                            </div>
                            <h4>Chaîne du Froid</h4>
                            <p>Respect strict de la chaîne du froid de A à Z</p>
                        </div>
                        <div className="certification-card fade-in">
                            <div className="certification-icon">
                                <GlobeAltIcon className="heroicon" />
                            </div>
                            <h4>Pêche Durable</h4>
                            <p>
                                Pratiques respectueuses de l'environnement marin
                            </p>
                        </div>
                        <div className="certification-card fade-in">
                            <div className="certification-icon">
                                <ClipboardDocumentCheckIcon className="heroicon" />
                            </div>
                            <h4>Traçabilité</h4>
                            <p>Suivi complet de l'origine à la livraison</p>
                        </div>
                    </div>
                </div>
            </section>

            <Partners />

            <section className="contact-cta">
                <div className="container">
                    <h2>Prêt à collaborer avec nous ?</h2>
                    <p>
                        Contactez notre équipe pour vos projets d'aquaculture et
                        vos besoins en produits aquatiques
                    </p>
                    <Link to="/contact" className="btn btn-secondary">
                        <EnvelopeIcon className="heroicon" /> Nous contacter
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home
