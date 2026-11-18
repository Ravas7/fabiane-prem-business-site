import SectionTitle from "./SectionTitle.jsx";
import { workshops, messages } from "../data/site.js";
import { whatsappUrl } from "../lib/whatsapp.js";

export default function Workshops() {
  return (
    <section className="section section-dark" id="workshops">
      <div className="container">
        <SectionTitle eyebrow="Workshops" title={workshops.title}>
          {workshops.intro}
        </SectionTitle>

        <div className="cards cards-wide">
          {workshops.items.map((w) => (
            <article className="card card-dark" key={w.id}>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
              <dl className="meta">
                <div>
                  <dt>Quando</dt>
                  <dd>{w.when}</dd>
                </div>
                <div>
                  <dt>Onde</dt>
                  <dd>{w.where}</dd>
                </div>
              </dl>
              <a
                className="btn btn-light"
                href={whatsappUrl(messages.workshop(w.title))}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero participar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
