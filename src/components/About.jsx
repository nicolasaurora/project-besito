import { useEffect, useRef, useState } from 'react'
import CharacterReveal from './CharacterReveal'

const About = () => {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return undefined

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return

            setIsVisible(true)
            observer.disconnect()
        }, {
            threshold: 0.05,
        })

        observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            className={`about about-css-animate ${isVisible ? 'is-visible' : ''}`}
            id="nosotros"
            ref={sectionRef}
        >

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
                    Nacimos para sumar algo mejor a esos pequeños momentos del día: un snack rico, algo para compartir o una
                    pausa para recargar energía.
                </p>

                <strong>
                    Rico primero, saludable después.
                </strong>

            </div>

        </section>
    )
}

export default About
