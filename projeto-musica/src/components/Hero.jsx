export default function Hero({ perfil, numero, total }) {
  const generos = [...new Set(perfil.musicas.flatMap((m) => m.generos))];
  const anos = perfil.musicas.map((m) => Number(m.ano)).filter(Boolean);
  const maisAntiga = anos.length ? Math.min(...anos) : null;

  return (
    <section className="hero">
      <div className="avatar">{perfil.nome.charAt(0)}</div>

      <div className="hero-info">
        <div className="hero-kicker">Perfil {numero} de {total}</div>
        <h1 className="hero-name">Página de músicas — {perfil.nome}</h1>
        <p className="hero-estilo">{perfil.estilo}</p>
        <div className="tags">
          {generos.map((g) => (
            <span key={g} className="tag">{g}</span>
          ))}
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat"><strong>{perfil.musicas.length}</strong><span>Músicas</span></div>
        <div className="stat"><strong>{generos.length}</strong><span>Gêneros</span></div>
        {maisAntiga && (
          <div className="stat"><strong>{maisAntiga}</strong><span>Mais antiga</span></div>
        )}
      </div>
    </section>
  );
}
