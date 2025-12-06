import { useEffect, useRef } from 'react'
import {
    InformationCircleIcon,
    StarIcon,
    LightBulbIcon,
} from '@heroicons/react/24/outline'
import AnimatedStats from '../components/AnimatedStats'

const GlobeWaveIcon = ({ className }: { className?: string }) => (
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

function About() {
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
        <div className="about-page" ref={pageRef}>
            <div
                className="page-header-bg"
                style={{
                    backgroundImage: 'url(propos.jpeg)',
                }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>
                        <InformationCircleIcon className="heroicon header-icon" />{' '}
                        À propos de nous
                    </h1>
                    <p>Découvrez notre histoire et nos valeurs</p>
                </div>
            </div>

            <section className="history-section">
                <div className="container">
                    <div className="history-content fade-in">
                        <div className="history-text">
                            <h3>Notre Histoire</h3>
                            <p>
                                Créée en 2013 par Mr Roméo David, expert reconnu
                                en pêche durable et aquaculture, CFM s'est
                                imposée comme un acteur majeur de l'industrie
                                halieutique en Afrique de l'Ouest.
                            </p>
                            <p>
                                Notre vision est d'assurer une alimentation de
                                qualité via des produits halieutiques issus
                                d'une pêche responsable et d'une aquaculture
                                durable, respectueuse de l'environnement.
                            </p>
                            <p>
                                Fort de plus de 10 ans d'expérience, nous avons
                                développé un réseau solide de partenaires
                                scientifiques et industriels qui nous permet de
                                garantir la qualité et la traçabilité de tous
                                nos produits.
                            </p>
                        </div>
                        <div className="history-image">
                            <img
                                src="histoire.jpeg"
                                alt="Installation aquacole CFM"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <h2 className="section-title">Nos Valeurs</h2>
                    <p className="section-subtitle">
                        Les principes qui guident notre action au quotidien
                    </p>

                    <div className="values-grid">
                        <div className="value-card fade-in">
                            <div className="icon">
                                <GlobeWaveIcon className="heroicon" />
                            </div>
                            <h4>Durabilité</h4>
                            <p>
                                Nous nous engageons pour une pêche et une
                                aquaculture responsables, respectueuses des
                                écosystèmes marins et de la biodiversité.
                            </p>
                        </div>
                        <div className="value-card fade-in">
                            <div className="icon">
                                <StarIcon className="heroicon" />
                            </div>
                            <h4>Qualité</h4>
                            <p>
                                Chaque produit répond aux standards les plus
                                élevés de qualité, de fraîcheur et de
                                traçabilité pour garantir la satisfaction
                                client.
                            </p>
                        </div>
                        <div className="value-card fade-in">
                            <div className="icon">
                                <LightBulbIcon className="heroicon" />
                            </div>
                            <h4>Innovation</h4>
                            <p>
                                Nous investissons dans la recherche et le
                                développement pour améliorer constamment nos
                                techniques et nos processus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div
                        className="history-content fade-in"
                        style={
                            {
                                flexDirection: 'row-reverse',
                            } as React.CSSProperties
                        }>
                        <div className="history-text">
                            <h3>Notre Expertise</h3>
                            <p>
                                CFM dispose d'une expertise technique reconnue
                                dans les techniques aquacoles innovantes à
                                recirculation bio sécurisée et d'un réseau
                                fiable d'armateurs.
                            </p>
                            <p>
                                Nous développons des projets en aquaculture
                                multi-sites avec des collaborations
                                scientifiques internationales, notamment avec
                                l'Université de Montpellier, l'IRD et l'INRA.
                            </p>
                            <p>
                                Notre réseau politique, économique et
                                scientifique consolidé nous permet de garantir
                                fiabilité et qualité à tous nos clients.
                            </p>
                        </div>
                        <div className="history-image">
                            <img
                                src="expertise.jpeg"
                                alt="Expertise aquacole"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="section"
                style={{ background: 'var(--gray-light)' }}>
                <div className="container">
                    <h2 className="section-title">
                        Nos Potentiels Partenaires Scientifiques
                    </h2>
                    <div className="partners-paragraph fade-in">
                        <p>
                            Dans le cadre de notre développement et de notre
                            engagement pour l'innovation, CFM envisage des
                            collaborations avec des institutions scientifiques
                            de renommée internationale. Parmi nos potentiels
                            partenaires figurent l'
                            <strong>Université de Montpellier</strong>, reconnue
                            pour son expertise en sciences marines et
                            aquaculture durable, l'
                            <strong>
                                IRD (Institut de Recherche pour le
                                Développement)
                            </strong>{' '}
                            basé à Montpellier, avec qui nous pourrions mener
                            des projets de recherche innovants, ainsi que l'
                            <strong>
                                INRA (Institut National de Recherche
                                Agronomique)
                            </strong>{' '}
                            qui pourrait nous accompagner dans le développement
                            de techniques d'élevage respectueuses de
                            l'environnement.
                        </p>
                        <p>
                            Ces partenariats potentiels s'inscrivent dans notre
                            vision à long terme d'allier excellence scientifique
                            et pratiques durables pour garantir la qualité de
                            nos produits et services.
                        </p>
                    </div>
                </div>
            </section>

            <AnimatedStats />

            <section className="team-section">
                <div className="container">
                    <h2 className="section-title">Notre Équipe</h2>
                    <p className="section-subtitle">
                        Une équipe passionnée et expérimentée au service de
                        l'aquaculture durable
                    </p>
                    <div className="team-grid">
                        <div className="team-card fade-in">
                            <div className="team-image">
                                <img
                                    src="direction.jpeg"
                                    alt="Roméo David - Fondateur"
                                />
                            </div>
                            <div className="team-info">
                                <p className="role">
                                    Fondateur & Directeur Général
                                </p>
                                <p>
                                    Expert en pêche durable avec plus de 20 ans
                                    d'expérience dans l'industrie halieutique.
                                </p>
                            </div>
                        </div>
                        <div className="team-card fade-in">
                            <div className="team-image">
                                <img
                                    src="direction.jpeg"
                                    alt="Marie Akplo - Directrice Commerciale"
                                />
                            </div>
                            <div className="team-info">
                                <p className="role">Directrice Commerciale</p>
                                <p>
                                    Spécialiste des relations clients et du
                                    développement commercial en Afrique de
                                    l'Ouest.
                                </p>
                            </div>
                        </div>
                        <div className="team-card fade-in">
                            <div className="team-image">
                                <img
                                    src="direction.jpeg"
                                    alt="Directeur technique"
                                />
                            </div>
                            <div className="team-info">
                                <p className="role">Directeur technique</p>
                                <p>
                                    Directeur technique assurant supervision
                                    aquacole, optimisant production, qualité,
                                    durabilité et performance globale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
