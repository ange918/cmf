import { useState, useEffect, useRef } from 'react'
import AgencyCard from '../components/AgencyCard'

const allAgencies = [
  {
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    title: 'Siège Administratif - France',
    address: 'Paris, France - Centre d\'affaires',
    phone: '+33 X XX XX XX XX',
    hours: 'Lun-Ven: 9h-17h'
  },
  {
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    title: 'Cotonou, Bénin',
    address: 'Zone Portuaire de Cotonou, Avenue Jean-Paul II',
    phone: '+229 XX XX XX XX',
    hours: 'Lun-Ven: 7h-18h, Sam: 7h-13h'
  },
  {
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    title: 'Lomé, Togo',
    address: 'Port Autonome de Lomé, Avenue du 24 janvier',
    phone: '+228 XX XX XX XX',
    hours: 'Lun-Ven: 7h-18h, Sam: 7h-13h'
  },
  {
    image: 'https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    title: 'Abidjan, Côte d\'Ivoire',
    address: 'Zone Industrielle de Vridi, Boulevard VGE',
    phone: '+225 XX XX XX XX',
    hours: 'Lun-Ven: 7h-18h, Sam: 7h-13h'
  }
]

const faqItems = [
  {
    question: 'Comment passer une commande auprès de COMATRA FISH MARINE ?',
    answer: 'Vous pouvez passer commande en contactant directement l\'agence la plus proche de vous par téléphone ou email, ou en remplissant notre formulaire de demande de devis en ligne. Notre équipe commerciale vous recontactera dans les 24h.'
  },
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Nos délais de livraison varient selon votre localisation et le volume commandé. En général, nous livrons sous 24 à 48h dans les zones proches de nos agences, et sous 3 à 5 jours pour les livraisons plus éloignées.'
  },
  {
    question: 'Proposez-vous des solutions pour les professionnels ?',
    answer: 'Oui, nous travaillons principalement avec des professionnels : restaurants, hôtels, supermarchés, grossistes. Nous proposons des tarifs adaptés aux volumes et des conditions de paiement flexibles.'
  },
  {
    question: 'Comment garantissez-vous la fraîcheur des produits ?',
    answer: 'Nous disposons d\'une chaîne logistique complète avec des véhicules réfrigérés et des entrepôts frigorifiques certifiés. La traçabilité est assurée de la pêche/élevage jusqu\'à la livraison finale.'
  },
  {
    question: 'Puis-je visiter vos installations aquacoles ?',
    answer: 'Absolument ! Nous organisons régulièrement des visites de nos sites pour nos partenaires et clients potentiels. Contactez l\'agence la plus proche pour planifier une visite.'
  }
]

function Agencies() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const fadeElements = pageRef.current?.querySelectorAll('.fade-in')
    fadeElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="agencies-page" ref={pageRef}>
      <div className="page-header">
        <div className="container">
          <h1>Nos Agences</h1>
          <p>Présents en France et dans 3 pays d'Afrique de l'Ouest</p>
        </div>
      </div>

      <section className="agencies-section section">
        <div className="container">
          <h2 className="section-title">Nos Implantations</h2>
          <p className="section-subtitle">
            COMATRA FISH MARINE dispose d'un siège administratif en France et 
            d'agences opérationnelles dans les principaux ports d'Afrique de l'Ouest 
            pour vous servir au plus près.
          </p>
          <div className="agencies-grid">
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
          <h2 className="section-title">Carte de nos implantations</h2>
          <p className="section-subtitle">
            Visualisez nos agences en Afrique de l'Ouest
          </p>
          <div className="map-placeholder fade-in">
            <p>Carte interactive Google Maps - Nos 4 agences</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <h2 className="section-title">Pourquoi nous choisir ?</h2>
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-icon">🌍</div>
              <h4>Présence régionale</h4>
              <p>
                Avec nos agences dans 3 pays d'Afrique de l'Ouest, nous sommes 
                toujours proches de nos clients.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">🤝</div>
              <h4>Service personnalisé</h4>
              <p>
                Chaque agence dispose d'équipes locales dédiées pour un 
                accompagnement sur mesure.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">⚡</div>
              <h4>Réactivité</h4>
              <p>
                Notre implantation locale nous permet d'être réactifs et 
                de répondre rapidement à vos besoins.
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
                className={`faq-item fade-in ${activeIndex === index ? 'active' : ''}`}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                >
                  <h4>{item.question}</h4>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Agencies
