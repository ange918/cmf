import { useState, useEffect, useRef } from 'react'
import {
    BuildingOffice2Icon,
    MapPinIcon,
    GlobeAltIcon,
    UserGroupIcon,
    BoltIcon,
    ShoppingCartIcon,
    ClockIcon,
    BriefcaseIcon,
    ShieldCheckIcon,
    HomeModernIcon,
    ChevronUpIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline'
import AgencyCard from '../components/AgencyCard'

const allAgencies = [
    {
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        title: 'Siège Administratif - France',
        address: '71/73 Avenue Des Ternes 75017 Paris France',
        phone: ': +33 6 03 18 15 00',
        hours: 'Lun-Ven: 9h-17h',
    },

    {
        image: 'https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        title: "Abidjan, Côte d'Ivoire",
        address: '11 BPM 2536 ABIDJAN 11 CEDEX',
        phone: '+225 XX XX XX XX',
        hours: 'Lun-Ven: 7h-18h, Sam: 7h-13h',
    },
]

const faqItems = [
    {
        question: 'Comment passer une commande auprès de CFM ?',
        answer: "Vous pouvez passer commande en contactant directement l'agence la plus proche de vous par téléphone ou email, ou en remplissant notre formulaire de demande de devis en ligne. Notre équipe commerciale vous recontactera dans les 24h.",
        IconComponent: ShoppingCartIcon,
    },
    {
        question: 'Quels sont vos délais de livraison ?',
        answer: 'Nos délais de livraison varient selon votre localisation et le volume commandé. En général, nous livrons sous 24 à 48h dans les zones proches de nos agences, et sous 3 à 5 jours pour les livraisons plus éloignées.',
        IconComponent: ClockIcon,
    },
    {
        question: 'Proposez-vous des solutions pour les professionnels ?',
        answer: 'Oui, nous travaillons principalement avec des professionnels : restaurants, hôtels, supermarchés, grossistes. Nous proposons des tarifs adaptés aux volumes et des conditions de paiement flexibles.',
        IconComponent: BriefcaseIcon,
    },
    {
        question: 'Comment garantissez-vous la fraîcheur des produits ?',
        answer: "Nous disposons d'une chaîne logistique complète avec des véhicules réfrigérés et des entrepôts frigorifiques certifiés. La traçabilité est assurée de la pêche/élevage jusqu'à la livraison finale.",
        IconComponent: ShieldCheckIcon,
    },
    {
        question: 'Puis-je visiter vos installations aquacoles ?',
        answer: "Absolument ! Nous organisons régulièrement des visites de nos sites pour nos partenaires et clients potentiels. Contactez l'agence la plus proche pour planifier une visite.",
        IconComponent: HomeModernIcon,
    },
]

function Agencies() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
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

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className="agencies-page" ref={pageRef}>
            <div
                className="page-header-bg"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
                }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>
                        <BuildingOffice2Icon className="heroicon header-icon" />{' '}
                        Nos Agences
                    </h1>
                    <p>Présents en France et en Côte d'Ivoire</p>
                </div>
            </div>

            <section className="agencies-section section">
                <div className="container">
                    <h2 className="section-title">Nos Implantations</h2>
                    <p className="section-subtitle">
                        CFM dispose d'un siège administratif en France et
                        d'agences opérationnelles en Côte d'Ivoire pour vous
                        servir au plus près.
                    </p>
                    <div className="agencies-grid-full">
                        {allAgencies.map((agency, index) => (
                            <div key={index} className="fade-in">
                                <AgencyCard {...agency} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <h2 className="section-title">
                        Carte de nos implantations
                    </h2>
                    <p className="section-subtitle">
                        Visualisez notre agences en Afrique de l'Ouest
                    </p>
                    <div className="map-placeholder fade-in">
                        <MapPinIcon className="heroicon map-icon" />
                        <p>Carte interactive Google Maps - Nos 2 agences</p>
                    </div>
                </div>
            </section>

            <section
                className="section"
                style={{ background: 'var(--gray-light)' }}>
                <div className="container">
                    <h2 className="section-title">Pourquoi nous choisir ?</h2>
                    <div className="services-grid">
                        <div className="service-card fade-in">
                            <div className="service-icon">
                                <GlobeAltIcon className="heroicon" />
                            </div>
                            <h4>Présence régionale</h4>
                            <p>
                                Avec notre agences en Afrique de l'Ouest, nous
                                sommes toujours proches de nos clients.
                            </p>
                        </div>
                        <div className="service-card fade-in">
                            <div className="service-icon">
                                <UserGroupIcon className="heroicon" />
                            </div>
                            <h4>Service personnalisé</h4>
                            <p>
                                Notre agence dispose d'équipes locales dédiées
                                pour un accompagnement sur mesure.
                            </p>
                        </div>
                        <div className="service-card fade-in">
                            <div className="service-icon">
                                <BoltIcon className="heroicon" />
                            </div>
                            <h4>Réactivité</h4>
                            <p>
                                Notre implantation locale nous permet d'être
                                réactifs et de répondre rapidement à vos
                                besoins.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Questions Fréquentes</h2>
                    <p className="section-subtitle">
                        Retrouvez les réponses aux questions les plus courantes
                    </p>
                    <div className="faq-grid">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${
                                    activeIndex === index ? 'active' : ''
                                }`}>
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={activeIndex === index}
                                    type="button">
                                    <div className="faq-question-content">
                                        <span className="faq-question-icon">
                                            <item.IconComponent className="heroicon" />
                                        </span>
                                        <h4>{item.question}</h4>
                                    </div>
                                    <span className="faq-chevron">
                                        {activeIndex === index ? (
                                            <ChevronUpIcon className="heroicon" />
                                        ) : (
                                            <ChevronDownIcon className="heroicon" />
                                        )}
                                    </span>
                                </button>
                                {activeIndex === index && (
                                    <div className="faq-answer active">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Agencies
