import SectionTitle from "./SectionTitle.jsx";
import { services, messages } from "../data/site.js";
import { whatsappUrl } from "../lib/whatsapp.js";

export default function Services() {
  return (
    <section className="section" id="terapias">
      <div className="container">
        <SectionTitle eyebrow="Terapias e práticas" title="Como posso cuidar de você">
          Cada prática pode ser feita de forma individual ou combinada, de acordo com o
          que você precisa neste momento.
        </SectionTitle>

        <div className="cards">
          {services.map((s, i) => (
            <article className="card" key={s.id}>
              <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a
                className="link-arrow"
                href={whatsappUrl(messages.service(s.title))}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero saber mais →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
