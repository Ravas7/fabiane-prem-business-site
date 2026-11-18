// Mandala decorativa em SVG (usa a cor do texto atual: currentColor).
export default function Mandala({ className = "" }) {
  const outer = Array.from({ length: 12 }, (_, i) => i * 30);
  const inner = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      className={className}
      viewBox="-100 -100 200 200"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      {outer.map((a) => (
        <ellipse key={`o${a}`} cx="0" cy="-62" rx="14" ry="34" transform={`rotate(${a})`} />
      ))}
      {inner.map((a) => (
        <ellipse key={`i${a}`} cx="0" cy="-30" rx="8" ry="20" transform={`rotate(${a})`} />
      ))}
      <circle r="97" />
      <circle r="99" strokeDasharray="1 3" />
      <circle r="9" />
    </svg>
  );
}
