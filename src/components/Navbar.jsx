import logoBesito from '../assets/besito-logo1.png'
import { useEffect, useState } from 'react'


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 70)
    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>

      <a href="#inicio" className="navbar-logo">
        <img src={logoBesito} alt="Besito" />
      </a>

      <div className="navbar-links">
        <a href="#nosotros">Nosotros</a>
        <a href="#packs">Packs</a>
        <a href="#como-trabajamos">Cómo trabajamos</a>
        <a href="#faq">Preguntas frecuentes</a>
      </div>

      <a className="navbar-button" href="#presupuesto">
        Solicitar propuesta
      </a>

    </nav>
  )
}

export default Navbar
