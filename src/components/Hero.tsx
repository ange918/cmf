import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-video-container">
          <iframe
            src="https://www.youtube.com/embed/GmYqGe4fWCQ?autoplay=1&mute=1&loop=1&playlist=GmYqGe4fWCQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=https://replit.com"
            title="Video background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hero-youtube-bg"
          ></iframe>
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">COMATRA FISH MARINE</h1>
        <p className="hero-subtitle">
          Qualité, durabilité et innovation pour une alimentation halieutique saine.
          <br /><br />
          Acteur clé de la pêche durable, aquaculture innovante et distribution 
          de produits aquatiques en Côte d'Ivoire, Bénin, Togo.
        </p>
        <div className="hero-buttons">
          <Link to="/about" className="btn btn-primary">
            <i className='bx bx-info-circle'></i> En Savoir Plus
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <i className='bx bx-envelope'></i> Nous contacter
          </Link>
        </div>
      </div>

      <div className="hero-highlights">
        <div className="hero-highlight-card">
          <div className="highlight-icon">
            <i className='bx bx-map-alt'></i>
          </div>
          <div className="highlight-content">
            <h4>4 Agences</h4>
            <p>France & Afrique de l'Ouest</p>
          </div>
        </div>
        <div className="hero-highlight-card">
          <div className="highlight-icon">
            <i className='bx bx-check-shield'></i>
          </div>
          <div className="highlight-content">
            <h4>Qualité Certifiée</h4>
            <p>Normes internationales</p>
          </div>
        </div>
        <div className="hero-highlight-card">
          <div className="highlight-icon">
            <i className='bx bx-leaf'></i>
          </div>
          <div className="highlight-content">
            <h4>Pêche Durable</h4>
            <p>Respect de l'environnement</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
