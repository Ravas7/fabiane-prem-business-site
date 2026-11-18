import { site } from "../data/site.js";

// Gera o link do WhatsApp já com a mensagem pronta preenchida.
export function whatsappUrl(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
