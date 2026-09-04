const Hero = () => {
    return (
        <section className="hero" id="inicio">

            <div className="hero-content">

                <span className="hero-eyebrow">
                    SNACKS CORPORATIVOS
                </span>

                <h1>
                    El snack que la gente espera que llegue a la oficina.
                </h1>

                <p>
                   Snacks ricos, variados y un poquito mejor para acompañar el día de tu equipo.
                </p>

                <div className="hero-actions">

                    <a href="#presupuesto" className="hero-button-primary">
                        QUIERO BESITO EN MI EMPRESA
                    </a>

                    <a href="#productos" className="hero-button-secondary">
                        Ver productos
                    </a>

                </div>

            </div>

            <div className="hero-image">
                <span>
                    Foto de productos
                </span>
            </div>

        </section>
    )
}

export default Hero