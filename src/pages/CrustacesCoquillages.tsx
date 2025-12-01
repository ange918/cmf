import { useEffect, useRef } from 'react'

const crustaces = [
  {
    name: 'Crevette',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Crevettes fraîches d\'élevage responsable, parfaites pour toutes vos préparations.'
  },
  {
    name: 'Gambas',
    image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Grosses crevettes sauvages, chair ferme et sucrée, idéales grillées.'
  },
  {
    name: 'Langoustine',
    image: 'https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Délicate et raffinée, la langoustine est un produit de luxe pour les grandes occasions.'
  },
  {
    name: 'Crabe',
    image: 'https://images.unsplash.com/photo-1550747528-cdb60598f7aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Chair délicate et savoureuse, le crabe est un incontournable des plateaux de fruits de mer.'
  },
  {
    name: 'Homard',
    image: 'https://images.unsplash.com/photo-1533680192076-dc81cbcc4e14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Le roi des crustacés, chair fine et goût exceptionnel pour les repas d\'exception.'
  }
]

const coquillages = [
  {
    name: 'Huître',
    image: 'https://images.unsplash.com/photo-1606731219412-fe4b1c2c1c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Huîtres fraîches de qualité supérieure, idéales nature ou gratinées.'
  },
  {
    name: 'Moule',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Moules charnues et savoureuses, parfaites pour les marinières et gratins.'
  },
  {
    name: 'Palourde',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Petit coquillage fin, excellent pour les pâtes aux fruits de mer.'
  },
  {
    name: 'Coquille Saint-Jacques',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'La noix de Saint-Jacques, produit d\'exception à la saveur délicate et sucrée.'
  },
  {
    name: 'Couteau de mer',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    description: 'Coquillage allongé à la chair ferme, délicieux grillé au beurre persillé.'
  }
]

function CrustacesCoquillages() {
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
      <div className="page-header-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1><i className='bx bxs-droplet'></i> Crustacés & Coquillages</h1>
          <p>Les trésors de la mer, sélectionnés avec soin</p>
        </div>
      </div>

      <section className="product-detail-section section">
        <div className="container">
          <h2 className="section-title">
            <i className='bx bx-water' style={{ marginRight: '10px' }}></i>
            Crustacés
          </h2>
          <p className="section-subtitle">
            Notre sélection de crustacés frais, pêchés de manière responsable et livrés 
            dans le respect strict de la chaîne du froid.
          </p>
          
          <div className="product-detail-grid">
            {crustaces.map((item, index) => (
              <div key={index} className="product-detail-card fade-in">
                <div className="product-detail-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-detail-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-detail-section section" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <h2 className="section-title">
            <i className='bx bxs-droplet-half' style={{ marginRight: '10px' }}></i>
            Coquillages
          </h2>
          <p className="section-subtitle">
            Des coquillages d\'une fraîcheur incomparable pour sublimer vos plats 
            et régaler vos convives.
          </p>
          
          <div className="product-detail-grid">
            {coquillages.map((item, index) => (
              <div key={index} className="product-detail-card fade-in">
                <div className="product-detail-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-detail-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-cta section">
        <div className="container">
          <h2>Besoin de crustacés ou coquillages ?</h2>
          <p>Notre équipe est à votre disposition pour répondre à toutes vos demandes.</p>
          <a href="/contact" className="btn btn-primary">
            <i className='bx bx-envelope'></i> Nous contacter
          </a>
        </div>
      </section>
    </div>
  )
}

export default CrustacesCoquillages
