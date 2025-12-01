import { useEffect, useRef } from 'react'

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
      <div className="page-header">
        <div className="container">
          <h1>À propos de nous</h1>
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
              <div className="icon">🌊</div>
              <h4>Durabilité</h4>
              <p>
                Nous nous engageons pour une pêche et une aquaculture responsables, 
                respectueuses des écosystèmes marins et de la biodiversité.
              </p>
            </div>
            <div className="value-card fade-in">
              <div className="icon">⭐</div>
              <h4>Qualité</h4>
              <p>
                Chaque produit répond aux standards les plus élevés de qualité, 
                de fraîcheur et de traçabilité pour garantir la satisfaction client.
              </p>
            </div>
            <div className="value-card fade-in">
              <div className="icon">🔬</div>
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
              <h4>Université de Montpellier</h4>
              <p>
                Reconnue pour son expertise en sciences marines et aquaculture durable.
              </p>
            </div>
            <div className="value-card fade-in">
              <h4>IRD Montpellier</h4>
              <p>
                Institut de Recherche pour le Développement avec qui nous menons 
                des projets de recherche innovants.
              </p>
            </div>
            <div className="value-card fade-in">
              <h4>INRA</h4>
              <p>
                Institut National de Recherche Agronomique qui nous accompagne 
                dans le développement de techniques d'élevage respectueuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Chiffres Clés</h2>
          <div className="about-stats" style={{ justifyContent: 'center', gap: '80px', marginTop: '40px' }}>
            <div className="stat-item fade-in">
              <div className="stat-number">15+</div>
              <div className="stat-label">Partenaires scientifiques</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">50+</div>
              <div className="stat-label">Clients professionnels</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">4</div>
              <div className="stat-label">Sites aquacoles</div>
            </div>
            <div className="stat-item fade-in">
              <div className="stat-number">100%</div>
              <div className="stat-label">Qualité garantie</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
