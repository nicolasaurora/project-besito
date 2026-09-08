export default function RevealTitle({ lines }) {
  return (
    <h1 className="text-reveal">
      {lines.map((line) => (
        <span className="text-reveal-line" key={line}>
          <span>{line}</span>
        </span>
      ))}
    </h1>
  )
}
