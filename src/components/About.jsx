import SectionTitle from "./SectionTitle.jsx";
import { about } from "../data/site.js";

export default function About() {
  return (
    <section className="section section-alt" id="sobre">
      <div className="container about-grid">
        <div className="photo-card" aria-hidden="true">
          {/* Trocar por uma foto do espaço ou da Fabiane atendendo */}
          <span>Foto do espaço / atendimento</span>
        </div>
        <div>
          <SectionTitle eyebrow="Sobre" title={about.title} />
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="pill-list">
            {about.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
