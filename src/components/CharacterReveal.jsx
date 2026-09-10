export default function CharacterReveal({ text, className = '', keepWordsTogether = false }) {
  const renderLetters = (word, wordIndex = 0) => (
    <span className={keepWordsTogether ? 'character-reveal-word' : undefined} key={`${word}-${wordIndex}`}>
      {[...word].map((character, index) => (
        <span className="character-reveal-letter" aria-hidden="true" key={`${character}-${index}`}>
          {character}
        </span>
      ))}
    </span>
  )

  return (
    <h3 className={`character-reveal ${className}`} aria-label={text}>
      {keepWordsTogether
        ? text.split(' ').map((word, index) => (
          <span key={`${word}-${index}`}>
            {renderLetters(word, index)}
            {index < text.split(' ').length - 1 && ' '}
          </span>
        ))
        : [...text].map((character, index) => (
          <span className="character-reveal-letter" aria-hidden="true" key={`${character}-${index}`}>
            {character === ' ' ? '\u00A0' : character}
          </span>
        ))}
    </h3>
  )
}
