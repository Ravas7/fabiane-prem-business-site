import { useState } from "react";
import { site, messages } from "../data/site.js";
import { whatsappUrl } from "../lib/whatsapp.js";

const links = [
  ["Sobre", "#sobre"],
  ["Terapias", "#terapias"],
  ["Workshops", "#workshops"],
  ["Depoimentos", "#depoimentos"],
  ["Contato", "#contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#topo" className="brand" onClick={close}>
          {site.name}
        </a>

        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a
            className="btn btn-primary btn-small"
            href={whatsappUrl(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
