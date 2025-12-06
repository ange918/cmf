import { useEffect, useRef } from 'react'

const equipements = [
    {
        category: 'Structures',
        items: [
            {
                name: 'Cages flottantes',
                image: '/structure.jpeg',
                description:
                    "Cages marines robustes pour l'élevage en mer, résistantes aux conditions météorologiques extrêmes. Conçues pour optimiser la croissance des poissons tout en assurant leur sécurité.",
            },
            {
                name: 'Structures en PEHD',
                image: 'pehd.jpg',
                description:
                    'Structures durables en polyéthylène haute densité pour installations aquacoles professionnelles. Résistantes à la corrosion et aux UV pour une longévité maximale.',
            },
        ],
    },
    {
        category: 'Bateaux',
        items: [
            {
                name: 'Bateaux de service',
                image: 'bateau.jpg',
                description:
                    "Embarcations spécialisées pour les opérations quotidiennes d'entretien et de nourrissage. Équipées pour faciliter le travail des équipes sur le terrain.",
            },
            {
                name: 'Barges de travail',
                image: 'barges.jpg',
                description:
                    'Plateformes flottantes polyvalentes pour les opérations de récolte et de maintenance lourde. Capacité de charge élevée et stabilité optimale.',
            },
        ],
    },
    {
        category: 'Filets',
        items: [
            {
                name: "Filets d'élevage",
                image: 'filets_elevage.jpg',
                description:
                    'Filets haute résistance avec traitement anti-fouling pour une durabilité maximale. Mailles adaptées à chaque stade de croissance des poissons.',
            },
            {
                name: 'Filets de protection',
                image: 'filet_de_protection.jpg',
                description:
                    'Protection efficace contre les prédateurs et les oiseaux pour sécuriser vos élevages. Installation facile et entretien minimal.',
            },
        ],
    },
    {
        category: 'Bassins',
        items: [
            {
                name: 'Bassins en béton',
                image: 'bassin_en_beton.jpg',
                description:
                    'Bassins durables pour élevage terrestre, avec systèmes de drainage intégrés. Conception optimisée pour le contrôle de la qualité de l\'eau.',
            },
            {
                name: 'Bassins géomembrane',
                image: 'geomenbrane.jpg',
                description:
                    'Solutions souples et économiques pour installations modulables. Étanchéité parfaite et adaptation à tous les terrains.',
            },
        ],
    },
    {
        category: 'Accessoires techniques',
        items: [
            {
                name: 'Aérateurs',
                image: '/aerateur.jpeg',
                description:
                    "Systèmes d'oxygénation performants pour maintenir une qualité d'eau optimale. Essentiels pour la santé et la croissance des espèces élevées.",
            },
            {
                name: "Distributeurs d'aliments",
                image: '/distributeur.jpeg',
                description:
                    'Distributeurs automatiques pour une alimentation régulière et contrôlée. Programmables pour optimiser les ratios alimentaires.',
            },
            {
                name: 'Pompes et filtres',
                image: 'pompe.jpeg',
                description:
                    'Équipements de filtration et recirculation pour systèmes RAS. Haute efficacité énergétique et faible maintenance.',
            },
        ],
    },
]

function EquipementAquacole() {
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

    let globalIndex = 0

    return (
        <div className="product-detail-page" ref={pageRef}>
            <div className="page-header-video">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video-bg">
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
                <div className="page-header-overlay"></div>
                <div className="container hero-content">
                    <h1>
                        <i className="bx bx-cog"></i> Équipement Aquacole
                    </h1>
                    <p>Solutions professionnelles pour l'aquaculture moderne</p>
                </div>
            </div>

            {equipements.map((section, sectionIndex) => {
                const sectionItems = section.items.map((item) => {
                    const currentIndex = globalIndex
                    globalIndex++
                    return { ...item, globalIndex: currentIndex }
                })

                return (
                    <section
                        key={sectionIndex}
                        className="product-detail-section section"
                        style={{
                            background:
                                sectionIndex % 2 === 0
                                    ? 'var(--white)'
                                    : 'var(--gray-light)',
                        }}>
                        <div className="container">
                            <h2 className="section-title">
                                <i
                                    className="bx bx-cube"
                                    style={{ marginRight: '10px' }}></i>
                                {section.category}
                            </h2>

                            <div className="alternating-products">
                                {sectionItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`alternating-product-card fade-in ${item.globalIndex % 2 === 1 ? 'reversed' : ''}`}>
                                        <div className="alternating-product-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="alternating-product-content">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            })}

            <section className="product-cta section">
                <div className="container">
                    <h2>Besoin d'équipements aquacoles ?</h2>
                    <p>
                        Nous vous accompagnons dans le choix et l'installation
                        de vos équipements.
                    </p>
                    <a href="/contact" className="btn btn-primary">
                        <i className="bx bx-envelope"></i> Demander un devis
                    </a>
                </div>
            </section>
        </div>
    )
}

export default EquipementAquacole
