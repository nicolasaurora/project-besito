import { FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logoBesitoBlanco from '../assets/besito-logoblanco-fondo-transparente.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img className="footer-logo" src={logoBesitoBlanco} alt="Besito" />

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
