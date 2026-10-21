import { REPO_URL } from "../data/perfis.js";

export default function Footer() {
  return (
    <footer className="footer">
      <span>Feito por: Gustavo Constantino, Felipe do Prado e Miguel Rosa</span>

      <a
        className="repo"
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Ver repositório no GitHub"
        aria-label="Repositório no GitHub"
      >
        {/* Ícone do Git */}
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="2.2" transform="rotate(45 12 12)" fill="#F05133" />
          <path d="M10 8v8M10 10.2l4.6 1.3" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="10" cy="8" r="1.7" fill="#fff" />
          <circle cx="10" cy="16" r="1.7" fill="#fff" />
          <circle cx="14.8" cy="11.6" r="1.7" fill="#fff" />
        </svg>
      </a>
    </footer>
  );
}
