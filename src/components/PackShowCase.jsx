import CharacterReveal from './CharacterReveal'

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
        <div className="pack-photo pack-photo-large">
          <span>Foto pack 01</span>
        </div>

        <div className="pack-photo">
          <span>Foto pack 02</span>
        </div>

        <div className="pack-photo">
          <span>Foto pack 03</span>
        </div>
      </div>
    </section>
  )
}

export default PacksShowcase
