import { useEffect, useRef } from 'react'

const poissonsNobles = [
  {
    name: 'Dorade',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Poisson noble méditerranéen à la chair fine et délicate. Idéal pour les grillades et cuissons au four.'
  },
  {
    name: 'Bar (Loup de mer)',
    image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Poisson fin et savoureux, très apprécié des chefs pour sa chair ferme et son goût subtil.'
  },
  {
    name: 'Tilapia eau salée',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Élevé dans nos installations aquacoles certifiées, ce tilapia offre une qualité supérieure.'
  },
  {
    name: 'Mérou',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Poisson massif à la chair blanche et ferme, parfait pour les plats en sauce.'
  },
  {
    name: 'Vivaneau (Snapper)',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Poisson tropical coloré, sa chair rose est tendre et légèrement sucrée.'
  },
  {
    name: 'Maigre',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Grand poisson à la chair nacrée, considéré comme l\'un des meilleurs poissons de la côte atlantique.'
  },
  {
    name: 'Sériole (Yellowtail)',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Poisson pélagique prisé pour sa texture ferme et son goût riche, idéal en sashimi.'
  },
  {
    name: 'Saumon',
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Saumon d\'élevage marin de qualité premium, riche en oméga-3.'
  },
  {
    name: 'Thon',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Thon d\'engraissement en mer, chair rouge foncée riche en saveurs.'
  }
]

function PoissonsNobles() {
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
    <div className="product-detail-page" ref={pageRef}>
      <div className="page-header-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1><i className='bx bx-water'></i> Poissons Nobles</h1>
          <p>Une sélection des meilleurs poissons de qualité premium</p>
        </div>
      </div>

      <section className="product-detail-section section">
        <div className="container">
          <p className="section-intro">
            Découvrez notre gamme de poissons nobles, élevés et pêchés selon les standards 
            les plus élevés de qualité et de durabilité. Chaque espèce est sélectionnée pour 
            sa fraîcheur et ses qualités gustatives exceptionnelles.
          </p>
          
          <div className="product-detail-grid">
            {poissonsNobles.map((poisson, index) => (
              <div key={index} className="product-detail-card fade-in">
                <div className="product-detail-image">
                  <img src={poisson.image} alt={poisson.name} />
                </div>
                <div className="product-detail-content">
                  <h3>{poisson.name}</h3>
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
          <p>Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins.</p>
          <a href="/contact" className="btn btn-primary">
            <i className='bx bx-envelope'></i> Demander un devis
          </a>
        </div>
      </section>
    </div>
  )
}

export default PoissonsNobles
