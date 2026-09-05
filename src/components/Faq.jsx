const Faq = () => {
    return (
        <section className="faq" id="faq">

            <div className="faq-header">

                <span className="faq-eyebrow">
                    PREGUNTAS FRECUENTES
                </span>

                <h2>
                    Lo que suelen preguntarnos.
                </h2>

            </div>

            <div className="faq-list">

                <details className="faq-item">
                    <summary>
                        ¿Se puede adaptar la propuesta al presupuesto de la empresa?
                    </summary>

                    <p>
                        Sí. Armamos la propuesta teniendo en cuenta cantidad de personas,
                        frecuencia y presupuesto.
                    </p>
                </details>

                <details className="faq-item">
                    <summary>
                        ¿Tienen opciones Sin TACC o veganas?
                    </summary>

                    <p>
                        Sí. Podemos contemplar diferentes preferencias y necesidades
                        alimentarias dentro de la propuesta.
                    </p>
                </details>

                <details className="faq-item">
                    <summary>
                        ¿Cada cuánto se pueden hacer las entregas?
                    </summary>

                    <p>
                        La frecuencia se coordina según la necesidad y dinámica de cada empresa.
                    </p>
                </details>

                <details className="faq-item">
                    <summary>
                        ¿Cómo solicito una propuesta?
                    </summary>

                    <p>
                        Nos contás sobre tu empresa y armamos una propuesta adaptada a tu equipo.
                    </p>
                </details>

            </div>

        </section>
    )
}

export default Faq