import { Link } from 'react-router-dom'

interface ProductCardProps {
  image: string
  title: string
  description: string
  items: string[]
  showQuoteButton?: boolean
}

function ProductCard({ image, title, description, items, showQuoteButton = false }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="product-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {showQuoteButton && (
          <Link 
            to={`/contact?product=${encodeURIComponent(title)}`} 
            className="btn btn-quote"
          >
            Demander un devis
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProductCard
