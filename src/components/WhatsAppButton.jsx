import { FaWhatsapp } from "react-icons/fa";

const whatsappMessage = encodeURIComponent('Hola!, quisiera más información sobre besito.')
const whatsappUrl = `https://wa.me/5491126189532?text=${whatsappMessage}`

const WhatsAppButton = () => {
    return (
        <a
            href={whatsappUrl}
            className="whatsapp-button"
            aria-label="Contactar por WhatsApp"
            target="_blank"
            rel="noreferrer"
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsAppButton;
