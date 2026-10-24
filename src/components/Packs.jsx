import { useEffect, useRef } from 'react'
import BrandsCarousel from './BrandsCarousel'

const Packs = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const animatedElements = section.querySelectorAll('.pack-option, .brands')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.1 })

    animatedElements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="packs packs-css-animate" id="packs" ref={sectionRef}>

      <div className="packs-header">

        <span className="packs-eyebrow">
          COMO TRABAJAMOS
        </span>

        <h2>
           Una propuesta que se adapta a ustedes.
        </h2>

        <p>
          Contanos cómo es tu equipo. Nosotros armamos la propuesta y coordinamos la entrega.
        </p>

      </div>

      <ol className="packs-options">
        <li className="pack-option">
          <h3>Cantidad</h3>
        </li>

        <li className="pack-option">
          <h3>Presupuesto</h3>
        </li>

        <li className="pack-option">
          <h3>Frecuencia</h3>
        </li>

        <li className="pack-option">
          <h3>Preferencias</h3>
        </li>

      </ol>

      <div className="brands">
        <span className="brands-title">MARCAS CON LAS QUE TRABAJAMOS</span>

        <BrandsCarousel />
      </div>

    </section>
  )
}

export default Packs
