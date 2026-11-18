import { ChatIcon } from "./Icons.jsx";
import { messages } from "../data/site.js";
import { whatsappUrl } from "../lib/whatsapp.js";

// Botão fixo no canto da tela, sempre visível.
export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappUrl(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <ChatIcon width={22} height={22} />
      <span>WhatsApp</span>
    </a>
  );
}
