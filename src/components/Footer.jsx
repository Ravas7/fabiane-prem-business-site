import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <strong>{site.name}</strong>
        <span>© {new Date().getFullYear()} · Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
