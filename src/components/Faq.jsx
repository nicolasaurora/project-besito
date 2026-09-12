import { useState } from 'react'

const questions = [
  {
    question: '¿Se puede adaptar la propuesta al presupuesto de la empresa?',
    answer: 'Sí. Armamos la propuesta teniendo en cuenta cantidad de personas, frecuencia y presupuesto.',
  },
  {
    question: '¿Tienen opciones Sin TACC o veganas?',
    answer: 'Sí. Podemos contemplar diferentes preferencias y necesidades alimentarias dentro de la propuesta.',
  },
  {
    question: '¿Cada cuánto se pueden hacer las entregas?',
    answer: 'La frecuencia se coordina según la necesidad y dinámica de cada empresa.',
  },
  {
    question: '¿Cómo solicito una propuesta?',
    answer: 'Nos contás sobre tu empresa y armamos una propuesta adaptada a tu equipo.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (event, index) => {
    event.preventDefault()
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index))
  }

  return (
    <section className="faq" id="faq">
      <div className="faq-header">
        <span className="faq-eyebrow">PREGUNTAS FRECUENTES</span>
        <h2>Lo que suelen preguntarnos:</h2>
      </div>

      <div className="faq-list">
        {questions.map(({ question, answer }, index) => {
          const isOpen = openIndex === index

          return (
            <details className="faq-item" key={question} open={isOpen}>
              <summary onClick={(event) => toggleQuestion(event, index)}>
                {question}
              </summary>
              {isOpen && <p>{answer}</p>}
            </details>
          )
        })}
      </div>
    </section>
  )
}

export default Faq
