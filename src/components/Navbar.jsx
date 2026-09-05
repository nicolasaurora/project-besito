import logoBesito from '../assets/besito-fondoblanco.jpg'


const Navbar = () => {
  return (
    <nav className="navbar">

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
