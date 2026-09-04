
const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        BESITO
      </div>

      <div className="navbar-links">
        <a href="#nosotros">Nosotros</a>
        <a href="#productos">Productos</a>
        <a href="#porque-besito">¿Por qué Besito?</a>
        <a href="#como-trabajamos">Cómo trabajamos</a>
      </div>

      <div>
        <a className="navbar-button" href="#presupuesto">
          Solicitar propuesta
        </a>
      </div>
    </nav>
  )
}

export default Navbar

