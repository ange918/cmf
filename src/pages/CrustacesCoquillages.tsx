import { useEffect, useRef } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

const FishIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
)

const DropletIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
)

const ShellfishIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
)

const crustacesMarins = [
    {
        name: 'Crevette à pattes blanches',
        scientificName: 'Litopenaeus vannamei',
        image: 'crevettes.jpg',
        description:
            "Crevette d'élevage de qualité supérieure, très populaire pour sa chair tendre et son goût délicat. Idéale pour toutes les préparations culinaires.",
    },
    {
        name: 'Crevette géante tigrée',
        scientificName: 'Penaeus monodon',
        image: 'gamba.jpeg',
        description:
            "La reine des crevettes, avec sa chair ferme et sucrée. Parfaite pour les grillades et les plats gastronomiques. Sa taille impressionnante en fait un produit premium.",
    },
    {
        name: 'Langoustine',
        scientificName: 'Nephrops norvegicus',
        image: 'langoustine.jpg',
        description:
            'Délicate et raffinée, la langoustine est un produit de luxe pour les grandes occasions. Sa chair fine et savoureuse est très prisée des gastronomes.',
    },
    {
        name: 'Crabe',
        scientificName: 'Brachyura',
        image: 'crabe.jpg',
        description:
            'Chair délicate et savoureuse, le crabe est un incontournable des plateaux de fruits de mer. Disponible en plusieurs variétés selon la saison.',
    },
    {
        name: 'Homard',
        scientificName: 'Homarus',
        image: 'homard.jpg',
        description:
            "Le roi des crustacés, chair fine et goût exceptionnel pour les repas d'exception. Un produit noble qui sublime toutes les préparations.",
    },
    {
        name: 'Gambas',
        scientificName: 'Penaeus kerathurus',
        image: 'gamba.jpeg',
        description:
            'Grosses crevettes sauvages à la chair ferme et sucrée, idéales grillées. Très appréciées pour leur taille généreuse et leur saveur intense.',
    },
    {
        name: 'Huître',
        scientificName: 'Ostreidae',
        image: 'huitres.jpg',
        description:
            "Huîtres fraîches de qualité supérieure, élevées dans nos parcs ostréicoles. Idéales nature ou gratinées, elles apportent une touche d'élégance à vos tables.",
    },
    {
        name: 'Moule',
        scientificName: 'Mytilidae',
        image: 'moule.jpg',
        description:
            "Moules charnues et savoureuses issues de nos installations aquacoles. Parfaites pour les marinières, gratins et autres recettes traditionnelles.",
    },
]

const crustacesEauDouce = [
    {
        name: 'Crevette géante d\'eau douce',
        scientificName: 'Macrobrachium rosenbergii',
        image: 'langoustine.jpg',
        description:
            "Aussi appelée chevrette ou écrevisse géante, cette crevette d'eau douce offre une chair généreuse et savoureuse. Élevée dans nos bassins d'eau douce, elle représente une excellente alternative aux crevettes marines.",
    },
]

function CrustacesCoquillages() {
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
                        'url(https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
                }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>
                        <ShellfishIcon className="heroicon header-icon" /> Crustacés
                    </h1>
                    <p>Les trésors de la mer et d'eau douce, sélectionnés avec soin</p>
                </div>
            </div>

            <section className="product-detail-section section">
                <div className="container">
                    <p className="section-intro">
                        Découvrez notre sélection de crustacés d'exception, issus de nos fermes aquacoles 
                        ou pêchés de manière responsable. Chaque produit est sélectionné pour sa fraîcheur 
                        et ses qualités gustatives incomparables.
                    </p>

                    <h2 className="section-title">
                        <FishIcon className="heroicon section-title-icon" style={{ marginRight: '10px' }} />
                        Crustacés d'Eau de Mer
                    </h2>
                    <p className="section-subtitle">
                        Notre sélection de crustacés marins, élevés et pêchés selon les standards 
                        les plus stricts de qualité et de durabilité.
                    </p>

                    <div className="alternating-products">
                        {crustacesMarins.map((item, index) => (
                            <div
                                key={index}
                                className={`alternating-product-card fade-in ${index % 2 === 1 ? 'reversed' : ''}`}>
                                <div className="alternating-product-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="alternating-product-content">
                                    <h3>{item.name}</h3>
                                    <span className="scientific-name">{item.scientificName}</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="product-detail-section section"
                style={{ background: 'var(--gray-light)' }}>
                <div className="container">
                    <h2 className="section-title">
                        <DropletIcon className="heroicon section-title-icon" style={{ marginRight: '10px' }} />
                        Crustacés d'Eau Douce
                    </h2>
                    <p className="section-subtitle">
                        Nos crustacés d'eau douce, élevés dans nos bassins modernes pour une qualité optimale.
                    </p>

                    <div className="alternating-products">
                        {crustacesEauDouce.map((item, index) => (
                            <div
                                key={index}
                                className={`alternating-product-card fade-in ${index % 2 === 1 ? 'reversed' : ''}`}>
                                <div className="alternating-product-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="alternating-product-content">
                                    <h3>{item.name}</h3>
                                    <span className="scientific-name">{item.scientificName}</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="product-cta section">
                <div className="container">
                    <h2>Besoin de crustacés de qualité ?</h2>
                    <p>
                        Notre équipe est à votre disposition pour répondre à
                        toutes vos demandes.
                    </p>
                    <a href="/contact" className="btn btn-primary">
                        <EnvelopeIcon className="heroicon" /> Nous contacter
                    </a>
                </div>
            </section>
        </div>
    )
}

export default CrustacesCoquillages
