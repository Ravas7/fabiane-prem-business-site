import { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { ChatIcon, MailIcon, PinIcon, ClockIcon, InstaIcon } from "./Icons.jsx";
import { site, services, messages } from "../data/site.js";
import { whatsappUrl } from "../lib/whatsapp.js";

// Chave do Web3Forms (veja o README). Sem chave, o formulário roda em "modo demonstração".
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const STATUS_TEXT = {
  ok: "Mensagem enviada! Obrigada pelo contato, retorno em breve.",
  error: "Não foi possível enviar agora. Tente novamente ou chame no WhatsApp.",
  demo: "Modo demonstração: o envio por e-mail é ativado quando a chave do formulário for configurada.",
};

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (data.botcheck) return; // anti-spam: campo escondido preenchido por robôs
    if (!ACCESS_KEY) {
      setStatus("demo");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Novo contato pelo site — ${data.name}`,
          from_name: site.name,
          name: data.name,
          email: data.email,
          phone: data.phone,
          interesse: data.interest,
          message: data.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section" id="contato">
      <div className="container">
        <SectionTitle eyebrow="Contato" title="Vamos conversar?">
          Escreva uma mensagem aqui ou fale direto pelo WhatsApp.
        </SectionTitle>

        <div className="contact-grid">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Nome
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              E-mail
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Telefone / WhatsApp <small>(opcional)</small>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              Tenho interesse em
              <select name="interest" defaultValue="">
                <option value="">Selecione…</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Workshops">Workshops</option>
                <option value="Outro assunto">Outro assunto</option>
              </select>
            </label>
            <label>
              Mensagem
              <textarea name="message" rows="4" required />
            </label>

            {/* Campo isca contra robôs: escondido para pessoas */}
            <input
              type="checkbox"
              name="botcheck"
              className="hp"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              <MailIcon /> {status === "sending" ? "Enviando…" : "Enviar mensagem"}
            </button>

            <p className="form-note">
              Seus dados são usados apenas para retornar o seu contato.
            </p>

            {STATUS_TEXT[status] && (
              <p className={`form-status form-status-${status}`} role="status">
                {STATUS_TEXT[status]}
              </p>
            )}
          </form>

          <aside className="info">
            <a
              className="btn btn-whatsapp btn-block"
              href={whatsappUrl(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChatIcon /> Chamar no WhatsApp
            </a>

            <ul className="info-list">
              <li>
                <PinIcon />
                <span>
                  {site.address.line1}
                  {site.address.line2 && (
                    <>
                      <br />
                      {site.address.line2}
                    </>
                  )}
                  <br />
                  <small>{site.address.note}</small>
                </span>
              </li>
              <li>
                <ClockIcon />
                <span>
                  {site.hours.map((h) => (
                    <span key={h} className="block">
                      {h}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <ChatIcon />
                <span>{site.whatsappDisplay}</span>
              </li>
              <li>
                <MailIcon />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <InstaIcon />
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  {site.instagramHandle}
                </a>
              </li>
            </ul>

            {site.mapEmbedUrl ? (
              <iframe
                className="map"
                title="Mapa do local de atendimento"
                src={site.mapEmbedUrl}
                loading="lazy"
              />
            ) : (
              <div className="map map-placeholder">Mapa do local (configurar em data/site.js)</div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
