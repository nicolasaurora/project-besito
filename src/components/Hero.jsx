import logoBesito from '../assets/besito-logo1.png'

import RevealTitle from './RevealTitle'

const Hero = () => {
    return (
        <section className="hero" id="inicio">

            <div className="hero-content">

                <span className="hero-eyebrow">
                    SNACKS PARA EMPRESAS
                </span>

                <RevealTitle
                    lines={[
                        'El snack que la gente',
                        'espera que llegue a',
                        'la oficina.',
                    ]}
                />

                <p>
                    Snacks ricos, variados y un poquito mejor para acompañar
                    el día de tu equipo.
                </p>

                <div className="hero-actions">

                    <a href="#presupuesto" className="hero-button-primary">
                        Quiero Besito en mi empresa
                    </a>

                    <a href="#como-trabajamos" className="hero-button-secondary">
                        Ver cómo trabajamos
                    </a>

                </div>

                <span className="hero-message">
                    Un poquito mejor ya es un montón.
                </span>

            </div>

            <div className="hero-image" aria-label="Propuesta de snacks Besito">
                <span className="hero-sticker hero-sticker-top">RICO<br />PRIMERO.</span>
                <div className="hero-pack">
                    <img src={logoBesito} alt="Besito" />
                    <span>SNACKS PARA<br />EMPRESAS</span>
                </div>
                <span className="hero-sticker hero-sticker-bottom">UN POQUITO<br />MEJOR</span>
            </div>

        </section>
    )
}

export default Hero
