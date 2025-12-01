import { useEffect, useRef } from 'react'
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

function Agencies() {
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
    </div>
  )
}

export default Agencies
