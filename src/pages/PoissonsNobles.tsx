import { useEffect, useRef } from 'react'

const poissonsMarins = [
    {
        name: 'Dorade royale',
        scientificName: 'Sparus aurata',
        image: 'dorade.jpg',
        description:
            'Poisson noble méditerranéen à la chair fine et délicate. Idéal pour les grillades et cuissons au four. Sa qualité gustative en fait un favori des chefs.',
    },
    {
        name: 'Mérou',
        scientificName: 'Epinephelus aeneus',
        image: 'merou.jpg',
        description:
            'Poisson massif à la chair blanche et ferme, parfait pour les plats en sauce. Très apprécié pour sa texture et son goût délicat.',
    },
    {
        name: 'Ombrine tropicale',
        scientificName: 'Sciaenops ocellatus',
        image: 'bar.jpg',
        description:
            'Poisson à la chair ferme et savoureuse, adapté à diverses préparations culinaires. Excellente alternative pour les amateurs de poissons fins.',
    },
    {
        name: 'Mulet gris (Grey Mullet)',
        scientificName: 'Mugil cephalus',
        image: 'poisson.jpg',
        description:
            'Poisson polyvalent avec une chair tendre et légèrement parfumée. Ses œufs sont utilisés pour préparer la poutargue, un mets de luxe.',
    },
    {
        name: 'Dentex commun',
        scientificName: 'Dentex dentex',
        image: 'vivaneau.jpg',
        description:
            'Poisson de roche prisé pour sa chair blanche et délicate. Sa saveur subtile en fait un choix excellent pour les préparations raffinées.',
    },
    {
        name: 'Sériole (Yellowtail)',
        scientificName: 'Seriola lalandi',
        image: 'seriole.jpg',
        description:
            'Poisson pélagique prisé pour sa texture ferme et son goût riche. Idéal en sashimi ou grillé, très apprécié dans la cuisine japonaise.',
    },
    {
        name: 'Maigre',
        scientificName: 'Argyrosomus regius',
        image: 'maigre.jpg',
        description:
            "Grand poisson à la chair nacrée, considéré comme l'un des meilleurs poissons de la côte atlantique. Parfait pour les grandes tablées.",
    },
    {
        name: 'Barramundi',
        scientificName: 'Lates calcarifer',
        image: 'saumon.jpg',
        description:
            "Poisson d'élevage marin de qualité premium, chair blanche et délicate. Riche en oméga-3 et apprécié pour sa polyvalence culinaire.",
    },
]

const poissonsEauDouce = [
    {
        name: 'Tilapia (souche améliorée)',
        scientificName: 'Oreochromis niloticus',
        image: 'tilapia.jpg',
        description:
            'Élevé dans nos installations aquacoles certifiées, ce tilapia du Nil offre une qualité supérieure avec une chair blanche et tendre.',
    },
    {
        name: 'Tilapia Heudelotii',
        scientificName: 'Sarotherodon melanotheron heudelotii',
        image: 'tilapia.jpg',
        description:
            "Variété de tilapia adaptée aux eaux saumâtres, idéale pour l'aquaculture en Afrique de l'Ouest. Chair savoureuse et texture ferme.",
    },
    {
        name: 'Tilapia Mossambicus',
        scientificName: 'Oreochromis mossambicus',
        image: 'tilapia.jpg',
        description:
            'Espèce robuste et résistante, parfaite pour diverses conditions d\'élevage. Offre une chair de qualité pour la consommation locale.',
    },
    {
        name: 'Tilapia Aureus',
        scientificName: 'Oreochromis aureus',
        image: 'tilapia.jpg',
        description:
            'Tilapia bleu reconnu pour sa croissance rapide et sa tolérance au froid. Chair délicate appréciée dans les cuisines régionales.',
    },
    {
        name: 'Chrysichthys',
        scientificName: 'Chrysichthys nigrodigitatus',
        image: 'poisson.jpg',
        description:
            "Poisson-chat africain prisé pour sa chair tendre et savoureuse. Très populaire dans les marchés d'Afrique de l'Ouest.",
    },
    {
        name: 'Clarias africain',
        scientificName: 'Clarias gariepinus',
        image: 'poisson.jpg',
        description:
            "Silure africain robuste, adapté à l'aquaculture intensive. Chair ferme et riche en protéines, très demandé sur les marchés locaux.",
    },
    {
        name: 'Heterobranchus',
        scientificName: 'Heterobranchus longifilis',
        image: 'poisson.jpg',
        description:
            "Poisson-chat de grande taille, élevé pour sa chair abondante et nutritive. Excellent choix pour l'aquaculture durable.",
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
                        Découvrez notre gamme de poissons nobles, élevés selon les standards les plus élevés de qualité et
                        de durabilité. Chaque espèce est sélectionnée pour sa fraîcheur et ses qualités gustatives exceptionnelles.
                    </p>

                    <h2 className="section-title">
                        <i className="bx bx-water" style={{ marginRight: '10px' }}></i>
                        Poissons Marins
                    </h2>
                    <p className="section-subtitle">
                        Nos poissons d'eau de mer, élevés en milieu marin contrôlé pour garantir une qualité exceptionnelle.
                    </p>

                    <div className="alternating-products">
                        {poissonsMarins.map((poisson, index) => (
                            <div
                                key={index}
                                className={`alternating-product-card fade-in ${index % 2 === 1 ? 'reversed' : ''}`}>
                                <div className="alternating-product-image">
                                    <img
                                        src={poisson.image}
                                        alt={poisson.name}
                                    />
                                </div>
                                <div className="alternating-product-content">
                                    <h3>{poisson.name}</h3>
                                    <span className="scientific-name">{poisson.scientificName}</span>
                                    <p>{poisson.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="product-detail-section section" style={{ background: 'var(--gray-light)' }}>
                <div className="container">
                    <h2 className="section-title">
                        <i className="bx bxs-droplet" style={{ marginRight: '10px' }}></i>
                        Poissons d'Eau Douce
                    </h2>
                    <p className="section-subtitle">
                        Nos poissons d'eau douce, issus de nos fermes aquacoles modernes et durables.
                    </p>

                    <div className="alternating-products">
                        {poissonsEauDouce.map((poisson, index) => (
                            <div
                                key={index}
                                className={`alternating-product-card fade-in ${index % 2 === 1 ? 'reversed' : ''}`}>
                                <div className="alternating-product-image">
                                    <img
                                        src={poisson.image}
                                        alt={poisson.name}
                                    />
                                </div>
                                <div className="alternating-product-content">
                                    <h3>{poisson.name}</h3>
                                    <span className="scientific-name">{poisson.scientificName}</span>
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
