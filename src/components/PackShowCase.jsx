import CharacterReveal from './CharacterReveal'
import comboOne from '../assets/combos/combo-1.jpg'
import comboTwo from '../assets/combos/combo-5.jpg'
import comboThree from '../assets/combos/combo-3.jpg'

const PacksShowcase = () => {
  return (
    <section className="packs-showcase">
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

        <div className="pack-photo pack-photo-contain">
          <img src={comboTwo} alt="Combo Besito con snacks para empresas" />
        </div>

        <div className="pack-photo pack-photo-contain pack-photo-wide">
          <img src={comboThree} alt="Propuesta de snacks saludables Besito" />
          <span className="pack-photo-badge">BOX<br />MATERO</span>
        </div>
      </div>

      <div className="packs-showcase-feature-caption">
        <p>Acompañá la bandeja semanal con el Box Matero.</p>
      </div>
    </section>
  )
}

export default PacksShowcase
