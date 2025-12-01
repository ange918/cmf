import { useEffect, useRef } from 'react'
import ProductCard from '../components/ProductCard'

const allProducts = [
  {
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    title: 'Poissons nobles',
    description: 'Maigre, daurade, carangue, tilapia, silures de haute qualité',
    items: ['Tilapia d\'élevage bio', 'Silures africains', 'Poissons marins frais']
  },
  {
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    title: 'Crustacés & Coquillages',
    description: 'Sélection premium de produits de la mer',
    items: ['Gambas fraîches', 'Langouste locale', 'Coquillages variés']
  },
  {
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    title: 'Équipements aquacoles',
    description: 'Solutions complètes pour l\'aquaculture',
    items: ['Aliments pour poissons', 'Équipements aquacoles', 'Systèmes de recirculation']
  },
  {
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    title: 'Poissons de mer',
    description: 'Poissons frais pêchés de manière responsable',
    items: ['Mérou', 'Bar', 'Sardines fraîches']
  },
  {
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    title: 'Poissons d\'eau douce',
    description: 'Élevés dans nos installations aquacoles certifiées',
    items: ['Carpe', 'Perche du Nil', 'Clarias']
  },
  {
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    title: 'Produits transformés',
    description: 'Poissons fumés et séchés traditionnellement',
    items: ['Poisson fumé', 'Poisson séché', 'Filets préparés']
  }
]

function Products() {
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
    <div className="products-page" ref={pageRef}>
      <div className="page-header">
        <div className="container">
          <h1>Nos Produits</h1>
          <p>Une gamme complète de produits aquatiques nobles</p>
        </div>
      </div>

      <section className="products-section section">
        <div className="container">
          <h2 className="section-title">Produits Aquatiques</h2>
          <p className="section-subtitle">
            Découvrez notre sélection de poissons, crustacés et produits de la mer 
            issus d'une pêche responsable et d'une aquaculture durable.
          </p>
          <div className="products-grid">
            {allProducts.map((product, index) => (
              <div key={index} className="fade-in">
                <ProductCard {...product} showQuoteButton={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">Services Associés</h2>
          <p className="section-subtitle">
            En complément de nos produits, nous proposons des services de qualité 
            pour garantir la fraîcheur et la qualité de vos commandes.
          </p>
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-icon">🚚</div>
              <h4>Logistique</h4>
              <p>
                Transport spécialisé et sécurisé pour produits frais. 
                Nous assurons la chaîne du froid de bout en bout.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">📦</div>
              <h4>Conditionnement</h4>
              <p>
                Emballage professionnel respectant la chaîne du froid. 
                Nos emballages sont conçus pour préserver la fraîcheur.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">🕐</div>
              <h4>Livraison Express</h4>
              <p>
                Livraison sous température contrôlée dans les délais. 
                Nous garantissons des délais de livraison optimaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Équipements & Aliments</h2>
          <p className="section-subtitle">
            Solutions complètes pour professionnels de l'aquaculture
          </p>
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-icon">🐟</div>
              <h4>Aliments pour poissons</h4>
              <p>
                Gamme complète d'aliments de qualité adaptés à chaque 
                espèce et stade de développement.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">⚙️</div>
              <h4>Équipements aquacoles</h4>
              <p>
                Matériel professionnel pour installations aquacoles : 
                pompes, filtres, aérateurs, cages.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">♻️</div>
              <h4>Systèmes de recirculation</h4>
              <p>
                Technologies innovantes pour une aquaculture durable 
                et économe en ressources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-cta-section">
        <div className="container">
          <h2 className="fade-in">Besoin d'un devis personnalisé ?</h2>
          <p className="fade-in">
            Notre équipe commerciale est à votre disposition pour étudier 
            vos besoins et vous proposer une offre adaptée.
          </p>
          <a href="/contact" className="btn fade-in">Demander un devis gratuit</a>
        </div>
      </section>
    </div>
  )
}

export default Products
