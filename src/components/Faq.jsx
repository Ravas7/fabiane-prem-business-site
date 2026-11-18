import SectionTitle from "./SectionTitle.jsx";
import { faq } from "../data/site.js";

export default function Faq() {
  return (
    <section className="section section-alt" id="duvidas">
      <div className="container faq">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
        {faq.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
