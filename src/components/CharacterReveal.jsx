export default function CharacterReveal({ text, className = '', keepWordsTogether = false, as: Tag = 'h3' }) {
  const renderLetters = (word, wordIndex = 0, characterOffset = 0) => (
    <span className={keepWordsTogether ? 'character-reveal-word' : undefined} key={`${word}-${wordIndex}`}>
      {[...word].map((character, index) => (
        <span
          className="character-reveal-letter"
          aria-hidden="true"
          key={`${character}-${index}`}
          style={{ '--character-index': characterOffset + index }}
        >
          {character}
        </span>
      ))}
    </span>
  )

  return (
    <Tag className={`character-reveal ${className}`} aria-label={text}>
      {keepWordsTogether
        ? text.split(' ').map((word, index) => (
          <span key={`${word}-${index}`}>
            {renderLetters(
              word,
              index,
              text.split(' ').slice(0, index).reduce((offset, previousWord) => offset + previousWord.length + 1, 0),
            )}
            {index < text.split(' ').length - 1 && ' '}
          </span>
        ))
        : [...text].map((character, index) => (
          <span
            className="character-reveal-letter"
            aria-hidden="true"
            key={`${character}-${index}`}
            style={{ '--character-index': index }}
          >
            {character === ' ' ? '\u00A0' : character}
          </span>
        ))}
    </Tag>
  )
}
