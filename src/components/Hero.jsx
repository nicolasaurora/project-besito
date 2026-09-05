const Hero = () => {
    return (
        <section className="hero" id="inicio">

            <div className="hero-content">

                <span className="hero-eyebrow">
                    SNACKS PARA EMPRESAS
                </span>

                <h1>
                    El snack que la gente espera que llegue a la oficina.
                </h1>

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

            <div className="hero-image">
                <span>
                    Foto de un pack real de Besito
                </span>
            </div>

        </section>
    )
}

export default Hero