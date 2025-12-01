interface AgencyCardProps {
  image: string
  title: string
  address: string
  phone: string
  hours: string
}

function AgencyCard({ image, title, address, phone, hours }: AgencyCardProps) {
  return (
    <div className="agency-card">
      <div className="agency-image">
        <img src={image} alt={title} />
      </div>
      <div className="agency-content">
        <h3>{title}</h3>
        <div className="agency-info">
          <p><strong>Adresse:</strong></p>
          <p>{address}</p>
          <p style={{ marginTop: '10px' }}>
            <strong>Téléphone:</strong> {phone}
          </p>
          <p>
            <strong>Horaires:</strong> {hours}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AgencyCard
