import logoBesito from '../assets/besito-logo1.png'

import RevealTitle from './RevealTitle'

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
                    Un mimo para recargar energias y seguir.
                </p>

                <div className="hero-actions">

                    <a href="#presupuesto" className="hero-button-primary">
                        Quiero Besito en mi empresa
                    </a>

                    <a href="#packs" className="hero-button-secondary">
                        Ver cómo trabajamos
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
