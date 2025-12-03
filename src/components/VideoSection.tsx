import { useState } from 'react'

function VideoSection() {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="video-section section">
      <div className="container">
        <h2 className="section-title">Présentation de notre entreprise</h2>
        <p className="section-subtitle">
          Découvrez notre engagement pour une aquaculture durable et une pêche 
          responsable à travers cette présentation de COMATRA FISH MARINE.
        </p>
        
        <div className="video-container">
          {!videoError ? (
            <video 
              controls 
              className="video-presentation"
              src="/presentation.mp4"
              poster="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              onError={() => setVideoError(true)}
            >
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          ) : (
            <div 
              className="video-placeholder"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 48, 101, 0.7)'
                }}
              />
              <div 
                style={{
                  position: 'relative',
                  zIndex: 1,
                  textAlign: 'center',
                  color: 'white',
                  padding: '40px'
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎬</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
                  Vidéo de présentation
                </h3>
                <p style={{ opacity: 0.9 }}>
                  Ajoutez votre vidéo presentation.mp4 dans le dossier public
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default VideoSection
