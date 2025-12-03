import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in')
    fadeElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">À propos de nous</h2>
        <p className="section-subtitle">
          Plus de 10 ans d'expertise au service de l'aquaculture durable 
          et de la pêche responsable
        </p>

        <div className="about-content fade-in">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Installation aquacole moderne" 
            />
          </div>
          <div className="about-text">
            <h3>Notre Histoire</h3>
            <p>
              Créée en 2013 par Mr Roméo David, expert reconnu en pêche durable 
              et aquaculture, COMATRA FISH MARINE s'est imposée comme un acteur 
              majeur de l'industrie halieutique en Afrique de l'Ouest.
            </p>
            <p>
              Notre vision est d'assurer une alimentation de qualité via des 
              produits halieutiques issus d'une pêche responsable et d'une 
              aquaculture durable, respectueuse de l'environnement.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">9+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Pays présents</div>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary about-btn">
              <i className='bx bx-info-circle'></i> En savoir plus
            </Link>
          </div>
        </div>

        <div className="about-features">
          <div className="feature-card fade-in">
            <h4>Expertise technique</h4>
            <p>
              Techniques aquacoles innovantes à recirculation bio sécurisée 
              et réseaux fiables d'armateurs.
            </p>
          </div>
          <div className="feature-card fade-in">
            <h4>Innovation durable</h4>
            <p>
              Projets en aquaculture multi-sites avec collaborations 
              scientifiques internationales.
            </p>
          </div>
          <div className="feature-card fade-in">
            <h4>Réseau consolidé</h4>
            <p>
              Réseau politique, économique et scientifique consolidé 
              garantissant fiabilité et qualité.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
