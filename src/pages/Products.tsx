import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, TruckIcon, CubeIcon, ClockIcon, EnvelopeIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

const FishIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
)

const ShellfishIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
)

const mainProducts = [
    {
        image: 'poisson.jpg',
        title: 'Poissons nobles',
        description:
            'Dorade, Bar, Tilapia, Mérou, Vivaneau, Maigre, Sériole, Saumon et Thon de qualité premium.',
        link: '/poissons-nobles',
        iconType: 'fish',
    },
    {
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
        title: 'Crustacés & Coquillages',
        description:
            'Crevettes, Gambas, Langoustines, Crabes, Homards, Huîtres, Moules et bien plus.',
        link: '/crustaces-coquillages',
        iconType: 'shellfish',
    },
    {
        image: 'aquacole.jpg',
        title: 'Équipement aquacole',
        description:
            "Structures, bateaux, filets, bassins et accessoires techniques pour l'aquaculture professionnelle.",
        link: '/equipement-aquacole',
        iconType: 'equipment',
    },
]

function Products() {
    const pageRef = useRef<HTMLDivElement>(null)

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

        const fadeElements = pageRef.current?.querySelectorAll('.fade-in')
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
        <div className="products-page" ref={pageRef}>
            <div
                className="page-header-bg"
                style={{
                    backgroundImage: 'url(produits.jpeg)',
                }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>
                        <CubeIcon className="heroicon header-icon" /> Nos Produits
                    </h1>
                    <p>Une gamme complète de produits aquatiques nobles</p>
                </div>
            </div>

            <section className="products-section section">
                <div className="container">
                    <h2 className="section-title">Produits Aquatiques</h2>
                    <p className="section-subtitle">
                        Découvrez notre sélection de poissons, crustacés et
                        équipements issus d'une pêche responsable et d'une
                        aquaculture durable.
                    </p>
                    <div className="products-main-grid">
                        {mainProducts.map((product, index) => (
                            <div
                                key={index}
                                className="product-main-card fade-in">
                                <div className="product-main-image">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                    <div className="product-icon-badge">
                                        {renderProductIcon(product.iconType)}
                                    </div>
                                </div>
                                <div className="product-main-content">
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
                        ))}
                    </div>
                </div>
            </section>

            <section className="services-section section">
                <div className="container">
                    <h2 className="section-title">Services Associés</h2>
                    <p className="section-subtitle">
                        En complément de nos produits, nous proposons des
                        services de qualité pour garantir la fraîcheur et la
                        qualité de vos commandes.
                    </p>
                    <div className="services-grid">
                        <div className="service-card fade-in">
                            <div className="service-icon">
                                <TruckIcon className="heroicon" />
                            </div>
                            <h4>Logistique</h4>
                            <p>
                                Transport spécialisé et sécurisé pour produits
                                frais. Nous assurons la chaîne du froid de bout
                                en bout.
                            </p>
                        </div>
                        <div className="service-card fade-in">
                            <div className="service-icon">
                                <CubeIcon className="heroicon" />
                            </div>
                            <h4>Conditionnement</h4>
                            <p>
                                Emballage professionnel respectant la chaîne du
                                froid. Nos emballages sont conçus pour préserver
                                la fraîcheur.
                            </p>
                        </div>
                        <div className="service-card fade-in">
                            <div className="service-icon">
                                <ClockIcon className="heroicon" />
                            </div>
                            <h4>Livraison Express</h4>
                            <p>
                                Livraison sous température contrôlée dans les
                                délais. Nous garantissons des délais de
                                livraison optimaux.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="quote-cta-section">
                <div className="container">
                    <h2 className="fade-in">
                        Besoin d'un devis personnalisé ?
                    </h2>
                    <p className="fade-in">
                        Notre équipe commerciale est à votre disposition pour
                        étudier vos besoins et vous proposer une offre adaptée.
                    </p>
                    <Link to="/contact" className="btn fade-in">
                        <EnvelopeIcon className="heroicon" /> Demander un devis
                        gratuit
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Products
