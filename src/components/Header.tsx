import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          COMATRA <span>FISH MARINE</span>
        </Link>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/')}`}
            onClick={closeMenu}
          >
            Accueil
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about')}`}
            onClick={closeMenu}
          >
            À propos
          </Link>
          <Link 
            to="/products" 
            className={`nav-link ${isActive('/products')}`}
            onClick={closeMenu}
          >
            Produits
          </Link>
          <Link 
            to="/agencies" 
            className={`nav-link ${isActive('/agencies')}`}
            onClick={closeMenu}
          >
            Agences
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact')}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
