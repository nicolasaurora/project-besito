import CharacterReveal from './CharacterReveal'

const About = () => {
    return (
        <section className="about" id="nosotros">

            <div className="about-header">

                <span className="about-eyebrow">
                    ¿QUÉ ES BESITO?
                </span>

                <h2>
                    Somos la empresa que hace que el día de trabajo se sienta un poquito mejor.
                </h2>

                <CharacterReveal
                    text="No vendemos fruta, vendemos ganas de que llegue el snack."
                    keepWordsTogether
                />

            </div>

            <div className="about-content">

                <p>
                    Nacimos para hacer que esos pequeños momentos del día tengan algo más: un snack rico, un mate, algo para compartir o simplemente una pausa para recargar energía.
                </p>

                <strong>
                    Rico primero, saludable después.
                </strong>

            </div>

        </section>
    )
}

export default About
