import { FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logoBesito from '../assets/Besito Logos individuales Fondo Transparente-03.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logo-frame">
          <img className="footer-logo" src={logoBesito} alt="Besito" />
        </div>

        <p>Premium Snacks · Snacks para empresas</p>
      </div>

      <div className="footer-contact">
        <span className="footer-contact-title">SEGUINOS</span>

        <div className="footer-socials" aria-label="Redes sociales de Besito">
          <a
            href="https://www.instagram.com/besitosnacks/"
            className="footer-social-icon"
            aria-label="Instagram de Besito"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <span className="footer-social-icon" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedinIn aria-hidden="true" />
          </span>
          <a
            href="#presupuesto"
            className="footer-social-icon"
            aria-label="Ir al formulario de contacto"
          >
            <FaEnvelope aria-hidden="true" />
          </a>
        </div>
      </div>

      <p className="footer-copyright">© 2026 Besito. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
