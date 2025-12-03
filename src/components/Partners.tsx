function Partners() {
  return (
    <section className="partners-section section">
      <div className="container">
        <h2 className="section-title">Nos Partenaires & Collaborations</h2>
        <p className="section-subtitle">
          CFM collabore avec des partenaires européens, africains et 
          internationaux pour garantir l'excellence de nos produits et services. Notre 
          réseau s'étend sur trois continents, favorisant l'innovation et le développement durable.
        </p>
        
        <div className="partners-grid">
          <div className="partner-category">
            <div className="partner-icon">
              <i className='bx bx-globe'></i>
            </div>
            <h4>Partenaires Européens</h4>
            <p>
              Collaborations avec des instituts de recherche et entreprises en France, 
              Espagne et Portugal pour l'innovation technologique.
            </p>
          </div>
          
          <div className="partner-category">
            <div className="partner-icon">
              <i className='bx bxs-leaf'></i>
            </div>
            <h4>Partenaires Africains</h4>
            <p>
              Réseau solide en Côte d'Ivoire, Bénin, Togo et Sénégal pour une 
              distribution efficace et locale.
            </p>
          </div>
          
          <div className="partner-category">
            <div className="partner-icon">
              <i className='bx bx-world'></i>
            </div>
            <h4>Collaborations Internationales</h4>
            <p>
              Partenariats avec des organisations mondiales pour les standards 
              de qualité et la pêche durable.
            </p>
          </div>
        </div>

        <div className="partner-features">
          <div className="partner-feature">
            <i className='bx bx-check-circle'></i>
            <span>Certifications internationales</span>
          </div>
          <div className="partner-feature">
            <i className='bx bx-check-circle'></i>
            <span>Transfert de technologie</span>
          </div>
          <div className="partner-feature">
            <i className='bx bx-check-circle'></i>
            <span>Formation continue</span>
          </div>
          <div className="partner-feature">
            <i className='bx bx-check-circle'></i>
            <span>Recherche & Développement</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
