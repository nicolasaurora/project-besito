import { useEffect, useState } from 'react'
import logoBesito from '../assets/besito-logo1.png'

const navigationLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#packs', label: 'Cómo trabajamos' },
  { href: '#faq', label: 'Preguntas frecuentes' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateNavbar = () => {
      const scrollPosition = window.scrollY

      setIsScrolled(currentState => {
        if (currentState) return scrollPosition > 40
        return scrollPosition > 90
      })
    }

    const closeOnEscape = event => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('scroll', updateNavbar)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
        <img src={logoBesito} alt="Besito" />
      </a>

      <div className="navbar-links" id="primary-navigation">
        {navigationLinks.map(({ href, label }) => (
          <a href={href} key={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="#presupuesto" className="navbar-mobile-cta" onClick={closeMenu}>
          Solicitar propuesta
        </a>
      </div>

      <a className="navbar-button" href="#presupuesto">
        Solicitar propuesta
      </a>

      <button
        className="navbar-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(currentState => !currentState)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}

export default Navbar
