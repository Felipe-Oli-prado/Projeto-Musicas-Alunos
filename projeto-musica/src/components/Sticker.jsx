// Sticker de música (vinil + nota) no espaço vazio acima do cabeçalho
export default function Sticker() {
  return (
    <div className="sticker-area">
      <svg className="sticker" viewBox="0 0 120 120" role="img" aria-label="Sticker de música">
        <circle cx="60" cy="60" r="54" fill="#1b1b1b" stroke="#fff" strokeWidth="4" />
        <circle cx="60" cy="60" r="40" fill="none" stroke="#444" strokeWidth="2" />
        <circle cx="60" cy="60" r="30" fill="none" stroke="#444" strokeWidth="2" />
        <circle cx="60" cy="60" r="18" fill="#ff4fa3" />
        <circle cx="60" cy="60" r="4" fill="#1b1b1b" />
        <path
          d="M52 78 V48 L76 42 V72"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="48" cy="79" r="6" fill="#fff" />
        <circle cx="72" cy="73" r="6" fill="#fff" />
      </svg>
    </div>
  );
}
