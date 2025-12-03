import { useEffect, useRef } from 'react'
import AnimatedStats from '../components/AnimatedStats'

function About() {
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
    <div className="about-page" ref={pageRef}>
      <div className="page-header-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1><i className='bx bx-info-circle'></i> À propos de nous</h1>
          <p>Découvrez notre histoire et nos valeurs</p>
        </div>
      </div>

      <section className="history-section">
        <div className="container">
          <div className="history-content fade-in">
            <div className="history-text">
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
              <p>
                Fort de plus de 10 ans d'expérience, nous avons développé un réseau 
                solide de partenaires scientifiques et industriels qui nous permet 
                de garantir la qualité et la traçabilité de tous nos produits.
              </p>
            </div>
            <div className="history-image">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Installation aquacole COMATRA" 
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
                <i className='bx bx-water'></i>
              </div>
              <h4>Durabilité</h4>
              <p>
                Nous nous engageons pour une pêche et une aquaculture responsables, 
                respectueuses des écosystèmes marins et de la biodiversité.
              </p>
            </div>
            <div className="value-card fade-in">
              <div className="icon">
                <i className='bx bxs-star'></i>
              </div>
              <h4>Qualité</h4>
              <p>
                Chaque produit répond aux standards les plus élevés de qualité, 
                de fraîcheur et de traçabilité pour garantir la satisfaction client.
              </p>
            </div>
            <div className="value-card fade-in">
              <div className="icon">
                <i className='bx bx-bulb'></i>
              </div>
              <h4>Innovation</h4>
              <p>
                Nous investissons dans la recherche et le développement pour 
                améliorer constamment nos techniques et nos processus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="history-content fade-in" style={{ flexDirection: 'row-reverse' } as React.CSSProperties}>
            <div className="history-text">
              <h3>Notre Expertise</h3>
              <p>
                COMATRA FISH MARINE dispose d'une expertise technique reconnue 
                dans les techniques aquacoles innovantes à recirculation bio 
                sécurisée et d'un réseau fiable d'armateurs.
              </p>
              <p>
                Nous développons des projets en aquaculture multi-sites avec des 
                collaborations scientifiques internationales, notamment avec 
                l'Université de Montpellier, l'IRD et l'INRA.
              </p>
              <p>
                Notre réseau politique, économique et scientifique consolidé 
                nous permet de garantir fiabilité et qualité à tous nos clients.
              </p>
            </div>
            <div className="history-image">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Expertise aquacole" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <h2 className="section-title">Nos Partenaires Scientifiques</h2>
          <p className="section-subtitle">
            Nous collaborons avec des institutions scientifiques de renommée internationale
          </p>
          
          <div className="values-grid">
            <div className="value-card fade-in">
              <div className="icon">
                <i className='bx bxs-graduation'></i>
              </div>
              <h4>Université de Montpellier</h4>
              <p>
                Reconnue pour son expertise en sciences marines et aquaculture durable.
              </p>
            </div>
            <div className="value-card fade-in">
              <div className="icon">
                <i className='bx bx-globe'></i>
              </div>
              <h4>IRD Montpellier</h4>
              <p>
                Institut de Recherche pour le Développement avec qui nous menons 
                des projets de recherche innovants.
              </p>
            </div>
            <div className="value-card fade-in">
              <div className="icon">
                <i className='bx bx-test-tube'></i>
              </div>
              <h4>INRA</h4>
              <p>
                Institut National de Recherche Agronomique qui nous accompagne 
                dans le développement de techniques d'élevage respectueuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedStats />

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Notre Équipe</h2>
          <p className="section-subtitle">
            Une équipe passionnée et expérimentée au service de l'aquaculture durable
          </p>
          <div className="team-grid">
            <div className="team-card fade-in">
              <div className="team-image">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Roméo David - Fondateur"
                />
              </div>
              <div className="team-info">
                <h4>Roméo David</h4>
                <p className="role">Fondateur & Directeur Général</p>
                <p>Expert en pêche durable avec plus de 20 ans d'expérience dans l'industrie halieutique.</p>
              </div>
            </div>
            <div className="team-card fade-in">
              <div className="team-image">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Marie Akplo - Directrice Commerciale"
                />
              </div>
              <div className="team-info">
                <h4>Marie Akplo</h4>
                <p className="role">Directrice Commerciale</p>
                <p>Spécialiste des relations clients et du développement commercial en Afrique de l'Ouest.</p>
              </div>
            </div>
            <div className="team-card fade-in">
              <div className="team-image">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Dr. Emmanuel Mensah - Directeur Scientifique"
                />
              </div>
              <div className="team-info">
                <h4>Dr. Emmanuel Mensah</h4>
                <p className="role">Directeur Scientifique</p>
                <p>Docteur en biologie marine, responsable de la R&D et des partenariats scientifiques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
