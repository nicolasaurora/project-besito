import BrandsCarousel from './BrandsCarousel'

const Packs = () => {
  return (
    <section className="packs" id="packs">

      <div className="packs-header">

        <span className="packs-eyebrow">
          PACKS A MEDIDA
        </span>

        <h2>
          Vos elegís el equipo. Nosotros pensamos el snack.
        </h2>

        <p>
          Contanos cuántas personas son, cómo trabajan y qué presupuesto
          tenés. Nosotros armamos una propuesta a medida.
        </p>

      </div>

      <div className="packs-options">

        <article className="pack-card">
          <span>01</span>
          <h3>Cantidad de personas</h3>
          <p>
            Adaptamos la propuesta al tamaño de tu equipo.
          </p>
        </article>

        <article className="pack-card">
          <span>02</span>
          <h3>Presupuesto</h3>
          <p>
            Buscamos la mejor combinación dentro de lo que querés invertir.
          </p>
        </article>

        <article className="pack-card">
          <span>03</span>
          <h3>Frecuencia</h3>
          <p>
            Definimos cada cuánto querés que llegue Besito a la oficina.
          </p>
        </article>

        <article className="pack-card">
          <span>04</span>
          <h3>Preferencias</h3>
          <p>
            Tenemos en cuenta gustos, necesidades y opciones alimentarias.
          </p>
        </article>

      </div>


      <div className="packs-inclusion">

        <div className="packs-inclusion-text">
          <span>PARA TODOS</span>

          <h3>
            Que haya algo para todos.
          </h3>

          <p>
            Tenemos en cuenta diferentes gustos, preferencias
            y necesidades alimentarias.
          </p>
        </div>

        <div className="packs-tags">
          <span>Sin TACC</span>
          <span>Vegano</span>
          <span>Sin azúcar</span>
          <span>Proteico</span>
        </div>

      </div>

      <div className="brands">
        <span className="brands-title">MARCAS CON LAS QUE TRABAJAMOS</span>

        <BrandsCarousel />
      </div>

    </section>
  )
}

export default Packs
