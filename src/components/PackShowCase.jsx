import CharacterReveal from './CharacterReveal'

const PacksShowcase = () => {
  return (
    <section className="packs-showcase">
      <div className="packs-showcase-header">
        <span className="packs-showcase-eyebrow">BESITO EN ACCIÓN</span>

        <h2>Un Besito distinto cada semana.</h2>

        <p>Bandejas que cambian para que el beneficio nunca se vuelva aburrido.</p>

        <CharacterReveal
          className="packs-showcase-statement"
          text="Algunas de las propuestas que armamos para acompañar momentos de trabajo…"
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
