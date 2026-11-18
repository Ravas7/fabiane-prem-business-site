import SectionTitle from "./SectionTitle.jsx";
import { testimonials } from "../data/site.js";

export default function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <SectionTitle eyebrow="Depoimentos" title="Quem já viveu a experiência" />
        <div className="cards">
          {testimonials.map((t) => (
            <figure className="card quote" key={t.author}>
              <blockquote>{t.text}</blockquote>
              <figcaption>— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
