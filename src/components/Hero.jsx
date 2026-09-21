import logoBesito from '../assets/besito-logo1.png'

import RevealTitle from './RevealTitle'

const primaryCtaText = 'Quiero Besito en mi empresa'

const Hero = () => {
    return (
        <section className="hero" id="inicio">

            <div className="hero-content">

                <span className="hero-eyebrow">
                    BESITO PARA EMPRESAS
                </span>

                <RevealTitle
                    lines={[
                        'El snack que la gente',
                        'espera que llegue a',
                        'la oficina cada semana.',
                    ]}
                />

                <p>
                    Una propuesta de snacks pensada para que tu equipo disfrute la pausa y quiera que vuelva.
                </p>

                <div className="hero-actions">

                    <a href="#presupuesto" className="hero-button-primary">
                        <span className="hero-button-label" aria-label={primaryCtaText}>
                            {[...primaryCtaText].map((character, index) => (
                                <span
                                    className="hero-button-letter"
                                    aria-hidden="true"
                                    key={`${character}-${index}`}
                                    style={{ '--letter-index': index }}
                                >
                                    {character === ' ' ? '\u00A0' : character}
                                </span>
                            ))}
                        </span>
                    </a>

                </div>

            </div>

            <div className="hero-image" aria-label="Propuesta de snacks Besito">
                <span className="hero-sticker hero-sticker-top">RICO<br />PRIMERO.</span>
                <div className="hero-pack">
                    <img src={logoBesito} alt="Besito" />
                    <span>SNACKS PARA<br />EMPRESAS</span>
                </div>
                <span className="hero-sticker hero-sticker-bottom">SALUDABLE<br />DESPUES.</span>
            </div>

        </section>
    )
}

export default Hero
