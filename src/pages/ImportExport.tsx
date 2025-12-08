import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowsRightLeftIcon,
    TruckIcon,
    GlobeAltIcon,
    CubeIcon,
    CheckBadgeIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline'

const services = [
    {
        icon: GlobeAltIcon,
        title: 'Réseau International',
        description:
            'Un réseau de partenaires fiables en Europe, Afrique et au-delà pour garantir des approvisionnements réguliers et de qualité.',
    },
    {
        icon: TruckIcon,
        title: 'Logistique Optimisée',
        description:
            'Transport frigorifique spécialisé pour maintenir la chaîne du froid et garantir la fraîcheur des produits.',
    },
    {
        icon: CheckBadgeIcon,
        title: 'Qualité Certifiée',
        description:
            'Tous nos produits respectent les normes sanitaires européennes et internationales les plus strictes.',
    },
    {
        icon: CubeIcon,
        title: 'Conditionnement Adapté',
        description:
            'Emballages professionnels adaptés à chaque type de produit pour une conservation optimale.',
    },
]

const productCategories = [
    {
        title: 'Produits Frais',
        description:
            'Poissons, crustacés et fruits de mer frais, livrés dans les 24 à 48 heures suivant la pêche ou la récolte.',
        items: [
            'Poissons entiers ou filetés',
            'Crevettes et gambas',
            'Crustacés vivants',
            'Huîtres et coquillages',
        ],
    },
    {
        title: 'Produits Surgelés',
        description:
            'Une gamme complète de produits de mer surgelés, conservant toutes leurs qualités nutritives et gustatives.',
        items: [
            'Filets de poisson',
            'Crevettes décortiquées',
            'Fruits de mer préparés',
            'Mélanges pour restauration',
        ],
    },
    {
        title: 'Conserves',
        description:
            'Conserves de qualité premium, préparées selon des recettes traditionnelles pour une saveur authentique.',
        items: [
            'Thon en conserve',
            'Sardines',
            'Maquereaux',
            'Préparations cuisinées',
        ],
    },
]

function ImportExport() {
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

    return (
        <div className="product-detail-page" ref={pageRef}>
            <div
                className="page-header-bg"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
                }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>
                        <ArrowsRightLeftIcon className="heroicon header-icon" /> Import & Export
                    </h1>
                    <p>Votre partenaire pour le commerce international de produits de la mer</p>
                </div>
            </div>

            <section className="product-detail-section section">
                <div className="container">
                    <p className="section-intro">
                        Notre Direction France assure l'import et l'export des produits de mer frais, 
                        surgelés et conserves. Grâce à notre réseau international et notre expertise 
                        logistique, nous garantissons des produits de qualité livrés dans les meilleures 
                        conditions.
                    </p>

                    <h2 className="section-title">Nos Services</h2>
                    <p className="section-subtitle">
                        Une offre complète pour répondre à tous vos besoins en import-export de produits aquatiques.
                    </p>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card fade-in">
                                <div className="service-icon">
                                    <service.icon className="heroicon" />
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="product-detail-section section"
                style={{ background: 'var(--gray-light)' }}>
                <div className="container">
                    <h2 className="section-title">Nos Catégories de Produits</h2>
                    <p className="section-subtitle">
                        Une gamme diversifiée de produits de la mer pour satisfaire tous les marchés.
                    </p>

                    <div className="products-categories-grid">
                        {productCategories.map((category, index) => (
                            <div key={index} className="category-card fade-in">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <ul className="category-items">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="product-detail-section section">
                <div className="container">
                    <h2 className="section-title">Zones de Couverture</h2>
                    <p className="section-subtitle">
                        Présents en France et en Côte d'Ivoire, nous assurons des échanges commerciaux 
                        fluides entre l'Europe et l'Afrique de l'Ouest.
                    </p>

                    <div className="coverage-grid fade-in">
                        <div className="coverage-card">
                            <h3>Import</h3>
                            <p>
                                Nous importons des produits de qualité depuis nos installations en 
                                Côte d'Ivoire et nos partenaires en Afrique de l'Ouest vers la France 
                                et l'Europe.
                            </p>
                        </div>
                        <div className="coverage-card">
                            <h3>Export</h3>
                            <p>
                                Nous exportons des produits européens et des équipements aquacoles 
                                vers l'Afrique de l'Ouest pour soutenir le développement de 
                                l'aquaculture locale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-cta section">
                <div className="container">
                    <h2>Besoin d'un partenaire import-export ?</h2>
                    <p>
                        Contactez notre équipe commerciale pour discuter de vos besoins 
                        et découvrir nos solutions sur mesure.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        <EnvelopeIcon className="heroicon" /> Nous contacter
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default ImportExport
