import { useEffect, useRef } from 'react'

const poissonsNobles = [
    {
        name: 'Dorade',
        image: 'dorade.jpg',
        description:
            'Poisson noble méditerranéen à la chair fine et délicate. Idéal pour les grillades et cuissons au four.',
    },
    {
        name: 'Bar (Loup de mer)',
        image: 'bar.jpg',
        description:
            'Poisson fin et savoureux, très apprécié des chefs pour sa chair ferme et son goût subtil.',
    },
    {
        name: 'Tilapia eau salée',
        image: 'tilapia.jpg',
        description:
            'Élevé dans nos installations aquacoles certifiées, ce tilapia offre une qualité supérieure.',
    },
    {
        name: 'Mérou',
        image: 'merou.jpg',
        description:
            'Poisson massif à la chair blanche et ferme, parfait pour les plats en sauce.',
    },
    {
        name: 'Vivaneau (Snapper)',
        image: 'vivaneau.jpg',
        description:
            'Poisson tropical coloré, sa chair rose est tendre et légèrement sucrée.',
    },
    {
        name: 'Maigre',
        image: 'maigre.jpg',
        description:
            "Grand poisson à la chair nacrée, considéré comme l'un des meilleurs poissons de la côte atlantique.",
    },
    {
        name: 'Sériole (Yellowtail)',
        image: 'seriole.jpg',
        description:
            'Poisson pélagique prisé pour sa texture ferme et son goût riche, idéal en sashimi.',
    },
    {
        name: 'Saumon',
        image: 'saumon.jpg',
        description:
            "Saumon d'élevage marin de qualité premium, riche en oméga-3.",
    },
    {
        name: 'Thon',
        image: 'thon.webp',
        description:
            "Thon d'engraissement en mer, chair rouge foncée riche en saveurs.",
    },
]

function PoissonsNobles() {
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
                    backgroundImage: 'url(poissonbg.webp)',
                }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>
                        <i className="bx bx-water"></i> Poissons Nobles
                    </h1>
                    <p>
                        Une sélection des meilleurs poissons de qualité premium
                    </p>
                </div>
            </div>

            <section className="product-detail-section section">
                <div className="container">
                    <p className="section-intro">
                        Découvrez notre gamme de poissons nobles, élevés et
                        pêchés selon les standards les plus élevés de qualité et
                        de durabilité. Chaque espèce est sélectionnée pour sa
                        fraîcheur et ses qualités gustatives exceptionnelles.
                    </p>

                    <div className="product-detail-grid">
                        {poissonsNobles.map((poisson, index) => (
                            <div
                                key={index}
                                className="product-detail-card fade-in">
                                <div className="product-detail-image">
                                    <img
                                        src={poisson.image}
                                        alt={poisson.name}
                                    />
                                </div>
                                <div className="product-detail-content">
                                    <h3>{poisson.name}</h3>
                                    <p>{poisson.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="product-cta section">
                <div className="container">
                    <h2>Intéressé par nos poissons nobles ?</h2>
                    <p>
                        Contactez-nous pour obtenir un devis personnalisé adapté
                        à vos besoins.
                    </p>
                    <a href="/contact" className="btn btn-primary">
                        <i className="bx bx-envelope"></i> Demander un devis
                    </a>
                </div>
            </section>
        </div>
    )
}

export default PoissonsNobles
