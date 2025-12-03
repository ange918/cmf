function VideoSection() {
  return (
    <section className="video-section section">
      <div className="container">
        <h2 className="section-title">Présentation de notre entreprise</h2>
        <p className="section-subtitle">
          Découvrez notre engagement pour une aquaculture durable et une pêche 
          responsable à travers cette présentation de CFM.
        </p>
        
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/GmYqGe4fWCQ?autoplay=1&mute=1&loop=1&playlist=GmYqGe4fWCQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Présentation CFM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-presentation-youtube"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
