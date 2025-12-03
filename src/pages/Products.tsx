import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const mainProducts = [
  {
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    title: 'Poissons nobles',
    description: 'Dorade, Bar, Tilapia, Mérou, Vivaneau, Maigre, Sériole, Saumon et Thon de qualité premium.',
    link: '/poissons-nobles',
    icon: 'bx-water'
  },
  {
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    title: 'Crustacés & Coquillages',
    description: 'Crevettes, Gambas, Langoustines, Crabes, Homards, Huîtres, Moules et bien plus.',
    link: '/crustaces-coquillages',
    icon: 'bxs-droplet'
  },
  {
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    title: 'Équipement aquacole',
    description: 'Structures, bateaux, filets, bassins et accessoires techniques pour l\'aquaculture professionnelle.',
    link: '/equipement-aquacole',
    icon: 'bx-cog'
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
      <div className="page-header-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1><i className='bx bx-package'></i> Nos Produits</h1>
          <p>Une gamme complète de produits aquatiques nobles</p>
        </div>
      </div>

      <section className="products-section section">
        <div className="container">
          <h2 className="section-title">Produits Aquatiques</h2>
          <p className="section-subtitle">
            Découvrez notre sélection de poissons, crustacés et équipements 
            issus d'une pêche responsable et d'une aquaculture durable.
          </p>
          <div className="products-main-grid">
            {mainProducts.map((product, index) => (
              <div key={index} className="product-main-card fade-in">
                <div className="product-main-image">
                  <img src={product.image} alt={product.title} />
                  <div className="product-icon-badge">
                    <i className={`bx ${product.icon}`}></i>
                  </div>
                </div>
                <div className="product-main-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Link to={product.link} className="btn-learn-more">
                    <i className='bx bx-right-arrow-alt'></i> En savoir plus
                  </Link>
                </div>
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
              <div className="service-icon">
                <i className='bx bxs-truck'></i>
              </div>
              <h4>Logistique</h4>
              <p>
                Transport spécialisé et sécurisé pour produits frais. 
                Nous assurons la chaîne du froid de bout en bout.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">
                <i className='bx bxs-package'></i>
              </div>
              <h4>Conditionnement</h4>
              <p>
                Emballage professionnel respectant la chaîne du froid. 
                Nos emballages sont conçus pour préserver la fraîcheur.
              </p>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon">
                <i className='bx bxs-time'></i>
              </div>
              <h4>Livraison Express</h4>
              <p>
                Livraison sous température contrôlée dans les délais. 
                Nous garantissons des délais de livraison optimaux.
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
          <Link to="/contact" className="btn fade-in">
            <i className='bx bx-envelope'></i> Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
