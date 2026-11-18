import Mandala from "./Mandala.jsx";
import { ChatIcon } from "./Icons.jsx";
import { site, messages } from "../data/site.js";
import { whatsappUrl } from "../lib/whatsapp.js";

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="eyebrow">Ayurveda · Yoga · Massagem · Meditação</span>
          <h1>{site.tagline}</h1>
          <p className="lead">
            Práticas integrativas para cuidar do corpo, acalmar a mente e acolher o que
            você sente — com presença e carinho.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-whatsapp"
              href={whatsappUrl(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChatIcon /> Agendar pelo WhatsApp
            </a>
            <a className="btn btn-ghost" href="#terapias">
              Conhecer as terapias
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <Mandala className="hero-mandala" />
          {/* Trocar por <img src="/foto-fabiane.jpg" alt="Fabiane Prem" /> */}
          <div className="photo-arch">
            <span>Foto da Fabiane</span>
          </div>
        </div>
      </div>
    </section>
  );
}
