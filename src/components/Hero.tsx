import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section 
      className="hero" 
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">COMATRA FISH MARINE</h1>
        <p className="hero-subtitle">
          Qualité, durabilité et innovation pour une alimentation halieutique saine.
          <br /><br />
          Acteur clé de la pêche durable, aquaculture innovante et distribution 
          de produits aquatiques en Côte d'Ivoire, Bénin, Togo.
        </p>
        <div className="hero-buttons">
          <Link to="/about" className="btn btn-primary">En Savoir Plus</Link>
          <Link to="/contact" className="btn btn-secondary">Nous contacter</Link>
        </div>
        <div className="hero-locations">
          <span className="hero-location">Cotonou</span>
          <span className="hero-location">Abidjan</span>
          <span className="hero-location">Lomé</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
