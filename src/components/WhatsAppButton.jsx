import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="#"
            className="whatsapp-button"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsAppButton;