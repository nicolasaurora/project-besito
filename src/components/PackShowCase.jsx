import { useEffect, useRef, useState } from 'react'
import CharacterReveal from './CharacterReveal'
import comboOne from '../assets/combos/bandeja-4k-1.jpeg'
import comboTwo from '../assets/combos/bandeja-4k-3.jpeg'
import comboThree from '../assets/combos/bandeja-4k-4.png'

const PacksShowcase = () => {
  const sectionRef = useRef(null)
  const captionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isCaptionVisible, setIsCaptionVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const caption = captionRef.current
    if (!section || !caption) return undefined

    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      setIsVisible(true)
      sectionObserver.disconnect()
    }, { threshold: 0.05 })

    const captionObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      setIsCaptionVisible(true)
      captionObserver.disconnect()
    }, { threshold: 0.1 })

    sectionObserver.observe(section)
    captionObserver.observe(caption)

    return () => {
      sectionObserver.disconnect()
      captionObserver.disconnect()
    }
  }, [])

  return (
    <section
      className={`packs-showcase packs-showcase-css-animate ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="packs-showcase-header">
        <span className="packs-showcase-eyebrow">BESITO EN ACCIÓN</span>

        <CharacterReveal
          as="h2"
          className="packs-showcase-title"
          text="Un Besito distinto cada semana."
          keepWordsTogether
        />
      </div>

      <div className="packs-gallery">
        <div className="pack-photo">
          <img src={comboOne} alt="Combo Besito de snacks saludables" />
        </div>

        <div className="pack-photo pack-photo-contain pack-photo-top-second">
          <img src={comboTwo} alt="Combo Besito con snacks para empresas" />
        </div>

        <div className="pack-photo pack-photo-contain pack-photo-wide">
          <img src={comboThree} alt="Propuesta de snacks saludables Besito" />
          <span className="pack-photo-badge">BOX<br />MATERO</span>
        </div>
      </div>

      <div
        className={`packs-showcase-feature-caption ${isCaptionVisible ? 'is-visible' : ''}`}
        ref={captionRef}
      >
        <p>Acompañá la bandeja semanal con el Box Matero.</p>
      </div>
    </section>
  )
}

export default PacksShowcase
