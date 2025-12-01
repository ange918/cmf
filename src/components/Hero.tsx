import { Link } from 'react-router-dom'

const sliderImages = [
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
  'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
  'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
  'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
  'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
]

function Hero() {
  const doubledImages = [...sliderImages, ...sliderImages]

  return (
    <section className="hero">
      <div className="hero-background">
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
          <Link to="/about" className="btn btn-primary">En Savoir Plus</Link>
          <Link to="/contact" className="btn btn-secondary">Nous contacter</Link>
        </div>
        <div className="hero-locations">
          <span className="hero-location">
            <i className='bx bxs-map'></i> Cotonou
          </span>
          <span className="hero-location">
            <i className='bx bxs-map'></i> Abidjan
          </span>
          <span className="hero-location">
            <i className='bx bxs-map'></i> Lomé
          </span>
        </div>
      </div>

      <div className="hero-slider-container">
        <div className="hero-slider">
          {doubledImages.map((src, index) => (
            <div key={index} className="slider-item">
              <img src={src} alt={`Aquaculture ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
