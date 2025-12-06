import { useEffect, useRef } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

const FishIcon = ({
    className,
    style,
}: {
    className?: string
    style?: React.CSSProperties
}) => (
    <svg
        className={className}
        style={style}
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

const DropletIcon = ({
    className,
    style,
}: {
    className?: string
    style?: React.CSSProperties
}) => (
    <svg
        className={className}
        style={style}
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

const poissonsMarins = [
    {
        name: 'Dorade royale',
        scientificName: 'Sparus aurata',
        image: 'dorade.jpg',
        description: 'Poisson plat de mer, apprécié pour sa chair délicate.',
    },
    {
        name: 'Mérou',
        scientificName: 'Epinephelus aeneus',
        image: 'merou.jpg',
        description: '  Gros poisson carnivore, vit près des récifs coralliens',
    },
    {
        name: 'Ombrine tropicale',
        scientificName: 'Sciaenops ocellatus',
        image: 'Ombrine-tropicale.jpg',
        description:
            'Poisson carnivore de récifs, chair ferme, goût raffiné, idéal cuisine.',
    },
    {
        name: 'Mulet gris (Grey Mullet)',
        scientificName: 'Murgil cephalus',
        image: 'grey.jpg',
        description:
            'Poisson savoureux, chair tendre, parfait pour plats sains et gourmands.',
    },
    {
        name: 'Dentex commun',
        scientificName: 'Denti ou denté',
        image: 'dentex.jpg',
        description:
            'Poisson premium, chair fine et goûteuse, très demandé par les restaurants.',
    },
    {
        name: 'Sériole  lalandili',
        scientificName: 'Seriole chicard',
        image: 'seriole.jpg',
        description:
            'Poisson pélagique prisé pour sa texture ferme et son goût riche. Idéal en sashimi ou grillé, très apprécié dans la cuisine japonaise.',
    },
    {
        name: 'Maigre',
        scientificName: 'arygrosomus regius)',
        image: 'maigre.jpg',
        description:
            'Chair délicate et très recherchée, vendu frais ou surgelé pour marchés et restaurants.',
    },
    {
        name: 'Barramundi',
        scientificName: 'Lates calcarifer',
        image: 'barramundi.jpg',
        description:
            'Poisson carnivore populaire, chair blanche et ferme, parfait pour marchés et restaurants.',
    },
    {
        name: 'Mérou',
        scientificName: 'Epinephelus canceolatus',
        image: 'Epinephelus.jpg',
        description:
            "Poisson d'élevage marin de qualité premium, chair blanche et délicate. Riche en oméga-3 et apprécié pour sa polyvalence culinaire.",
    },
    {
        name: '  Tilapia souche améliorer',
        scientificName: 'oreochromis mossambicus',
        image: 'tilapia.jpg',
        description:
            'Poisson nutritif, chair tendre, goût délicieux, idéal recettes variées.',
    },
    {
        name: '  Tilapia souche améliorer',
        scientificName: 'oreochromis aureus',
        image: 'aureus.webp',
        description:
            'Chair savoureuse et ferme, parfait pour cuisson grillée ou vapeur.',
    },
    {
        name: '  Tilapia souche améliorer',
        scientificName: 'scianenops occellarus',
        image: 'saumon.jpg',
        description:
            'Poisson de qualité, chair douce et délicate, très apprécié gourmets.',
    },
]

const poissonsEauDouce = [
    {
        name: 'Tilapia souche améliorée',
        scientificName: 'oreochromis niloticus ',
        image: 'tilapia.jpg',
        description:
            'Poisson nutritif, chair tendre et savoureuse, idéal recettes variées.',
    },
    {
        name: 'clarias',
        scientificName: 'nigrodigitatus',
        image: 'tilapia.jpg',
        description:
            'Poisson robuste, chair ferme, goût délicieux, parfait plats gourmands.',
    },
    {
        name: ' clarias',
        scientificName: 'gariepinus',
        image: 'tilapia.jpg',
        description:
            'Chair savoureuse et dense, poisson idéal pour cuisine familiale raffinée.',
    },
    {
        name: 'clarias ',
        scientificName: 'hétérobranchus longifilis',
        image: 'tilapia.jpg',
        description:
            'Poisson de grande taille, chair ferme et savoureuse, cuisine variée.',
    },
]

const crustacéeEauDeMer = [
    {
        name: 'crevettes à 5 pattes blanches',
        scientificName: 'litopenaeus vannamei',
        image: 'poisson.jpg',
        description:
            'Crevette premium, chair blanche et ferme, très recherchée pour exportation et marchés.',
    },
    {
        name: 'crevettes ',
        scientificName: 'penaeus vannamei',
        image: 'poisson.jpg',
        description:
            'Crevette tropicale de qualité, idéale pour la consommation fraîche ou surgelée.',
    },
    {
        name: 'crevette géante tigrée',
        scientificName: 'penaeus mondon',
        image: 'crevette-géant.jpg',
        description:
            'Crevette de grande taille, chair ferme et savoureuse, parfaite pour restaurants et export.',
    },
    {
        name: 'huître ',
        scientificName: 'huître ',
        image: 'huitres.jpg',
        description:
            'Mollusque délicat, très demandé en gastronomie, idéal pour vente fraîche et marchés.',
    },
    {
        name: 'moule',
        scientificName: 'moule',
        image: 'moule.jpg',
        description:
            'Mollusque facile à cultiver, chair savoureuse, excellente pour marchés et restaurants.',
    },
]

const crustacéeEauDouce = [
    {
        name: 'Crevette',
        scientificName: 'macrobrachium rosenbergii ',
        image: 'poisson.jpg',
        description:
            'Crevette d’eau douce de qualité, chair ferme et goûtée, très demandée sur le marché local.',
    },
]

function PoissonsElevage() {
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
                        <FishIcon className="heroicon header-icon" /> Poissons
                        d&#39;élevage
                    </h1>
                    <p> Une sélection des meilleurs espèce que CFM elève </p>
                </div>
            </div>

            <section className="product-detail-section section">
                <div className="container">
                    <p className="section-intro">
                        Découvrez notre gamme de poissons d'élevage selon les
                        standards les plus élevés de qualité et de durabilité.
                        Chaque espèce est sélectionnée pour sa fraîcheur et ses
                        qualités gustatives exceptionnelles avec les calibres de
                        : 400g - 600g ; 600g - 800g ; 800g - 1000g ; 1000g -
                        1500g ; 1500g - 2000g ; 2000g - 2500g ; 2500g - 3000g ;
                        3000g - 4000g sur le marché, des packages de : 10kg en
                        frais, 20kg et 30kg à 40 kg en surgelé de pêche et
                        aquaculture.
                    </p>

                    <h2 className="section-title">
                        <FishIcon
                            className="heroicon section-title-icon"
                            style={{ marginRight: '10px' }}
                        />
                        Poissons Marins
                    </h2>
                    <p className="section-subtitle">
                        Nos poissons d'eau de mer, élevés en milieu marin
                        contrôlé pour garantir une qualité exceptionnelle.
                    </p>

                    <div className="alternating-products">
                        {poissonsMarins.map((poisson, index) => (
                            <div
                                key={index}
                                className={`alternating-product-card fade-in ${
                                    index % 2 === 1 ? 'reversed' : ''
                                }`}>
                                <div className="alternating-product-image">
                                    <img
                                        src={poisson.image}
                                        alt={poisson.name}
                                    />
                                </div>
                                <div className="alternating-product-content">
                                    <h3>{poisson.name}</h3>
                                    <span className="scientific-name">
                                        {poisson.scientificName}
                                    </span>
                                    <p>{poisson.description}</p>
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
                        <DropletIcon
                            className="heroicon section-title-icon"
                            style={{ marginRight: '10px' }}
                        />
                        Poissons d'Eau Douce
                    </h2>
                    <p className="section-subtitle">
                        Nos poissons d'eau douce, issus de nos fermes aquacoles
                        modernes et durables.
                    </p>

                    <div className="alternating-products">
                        {poissonsEauDouce.map((poisson, index) => (
                            <div
                                key={index}
                                className={`alternating-product-card fade-in ${
                                    index % 2 === 1 ? 'reversed' : ''
                                }`}>
                                <div className="alternating-product-image">
                                    <img
                                        src={poisson.image}
                                        alt={poisson.name}
                                    />
                                </div>
                                <div className="alternating-product-content">
                                    <h3>{poisson.name}</h3>
                                    <span className="scientific-name">
                                        {poisson.scientificName}
                                    </span>
                                    <p>{poisson.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="product-detail-section section">
                <div className="container">
                    <h2 className="section-title">
                        <FishIcon
                            className="heroicon section-title-icon"
                            style={{ marginRight: '10px' }}
                        />
                        Crustacée d'eau de mer
                    </h2>
                    <p className="section-subtitle">
                        Nos crustacées d'eau douce, élevés en milieu marin
                        contrôlé pour garantir une qualité exceptionnelle.
                    </p>

                    <div className="alternating-products">
                        {crustacéeEauDeMer.map((crustace, index) => (
                            <div
                                key={index}
                                className={`alternating-product-card fade-in ${
                                    index % 2 === 1 ? 'reversed' : ''
                                }`}>
                                <div className="alternating-product-image">
                                    <img
                                        src={crustace.image}
                                        alt={crustace.name}
                                    />
                                </div>
                                <div className="alternating-product-content">
                                    <h3>{crustace.name}</h3>
                                    <span className="scientific-name">
                                        {crustace.scientificName}
                                    </span>
                                    <p>{crustace.description}</p>
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
                        <DropletIcon
                            className="heroicon section-title-icon"
                            style={{ marginRight: '10px' }}
                        />
                        Crustacés d'Eau douce
                    </h2>
                    <p className="section-subtitle">
                        Nos crustacés d’eau douce proviennent de nos fermes
                        aquacoles modernes et durables.
                    </p>

                    <div className="alternating-products">
                        {crustacéeEauDouce.map((crustace, index) => (
                            <div
                                key={index}
                                className={`alternating-product-card fade-in ${
                                    index % 2 === 1 ? 'reversed' : ''
                                }`}>
                                <div className="alternating-product-image">
                                    <img
                                        src={crustace.image}
                                        alt={crustace.name}
                                    />
                                </div>
                                <div className="alternating-product-content">
                                    <h3>{crustace.name}</h3>
                                    <span className="scientific-name">
                                        {crustace.scientificName}
                                    </span>
                                    <p>{crustace.description}</p>
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
                        <EnvelopeIcon className="heroicon" /> Demander un devis
                    </a>
                </div>
            </section>
        </div>
    )
}

export default PoissonsElevage
