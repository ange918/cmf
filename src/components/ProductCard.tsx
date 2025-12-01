interface ProductCardProps {
  image: string
  title: string
  description: string
  items: string[]
}

function ProductCard({ image, title, description, items }: ProductCardProps) {
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
      </div>
    </div>
  )
}

export default ProductCard
