import { useEffect, useRef } from 'react'

const equipements = [
  {
    category: 'Structures',
    items: [
      {
        name: 'Cages flottantes',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Cages marines robustes pour l\'élevage en mer, résistantes aux conditions météorologiques extrêmes.'
      },
      {
        name: 'Structures en PEHD',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Structures durables en polyéthylène haute densité pour installations aquacoles professionnelles.'
      }
    ]
  },
  {
    category: 'Bateaux',
    items: [
      {
        name: 'Bateaux de service',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Embarcations spécialisées pour les opérations quotidiennes d\'entretien et de nourrissage.'
      },
      {
        name: 'Barges de travail',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Plateformes flottantes pour les opérations de récolte et de maintenance lourde.'
      }
    ]
  },
  {
    category: 'Filets',
    items: [
      {
        name: 'Filets d\'élevage',
        image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Filets haute résistance avec traitement anti-fouling pour une durabilité maximale.'
      },
      {
        name: 'Filets de protection',
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Protection contre les prédateurs et les oiseaux pour sécuriser vos élevages.'
      }
    ]
  },
  {
    category: 'Bassins',
    items: [
      {
        name: 'Bassins en béton',
        image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Bassins durables pour élevage terrestre, avec systèmes de drainage intégrés.'
      },
      {
        name: 'Bassins géomembrane',
        image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Solutions souples et économiques pour installations modulables.'
      }
    ]
  },
  {
    category: 'Accessoires techniques',
    items: [
      {
        name: 'Aérateurs',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Systèmes d\'oxygénation performants pour maintenir une qualité d\'eau optimale.'
      },
      {
        name: 'Distributeurs d\'aliments',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Distributeurs automatiques pour une alimentation régulière et contrôlée.'
      },
      {
        name: 'Pompes et filtres',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
        description: 'Équipements de filtration et recirculation pour systèmes RAS.'
      }
    ]
  }
]

function EquipementAquacole() {
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
      <div className="page-header-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1><i className='bx bx-cog'></i> Équipement Aquacole</h1>
          <p>Solutions professionnelles pour l'aquaculture moderne</p>
        </div>
      </div>

      {equipements.map((section, sectionIndex) => (
        <section 
          key={sectionIndex} 
          className="product-detail-section section"
          style={{ background: sectionIndex % 2 === 0 ? 'var(--white)' : 'var(--gray-light)' }}
        >
          <div className="container">
            <h2 className="section-title">
              <i className='bx bx-cube' style={{ marginRight: '10px' }}></i>
              {section.category}
            </h2>
            
            <div className="equipment-grid">
              {section.items.map((item, index) => (
                <div key={index} className="equipment-card fade-in">
                  <div className="equipment-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="equipment-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="product-cta section">
        <div className="container">
          <h2>Besoin d'équipements aquacoles ?</h2>
          <p>Nous vous accompagnons dans le choix et l'installation de vos équipements.</p>
          <a href="/contact" className="btn btn-primary">
            <i className='bx bx-envelope'></i> Demander un devis
          </a>
        </div>
      </section>
    </div>
  )
}

export default EquipementAquacole
