import Cover from "./Cover.jsx";

function Linha({ rotulo, valor }) {
  if (!valor) return null;
  return (
    <>
      <dt>{rotulo}</dt>
      <dd>{valor}</dd>
    </>
  );
}

// Card de uma música. Capa, título e botão levam para o Spotify.
export default function SongCard({ musica: m, indice }) {
  return (
    <article className="song fade-in" style={{ animationDelay: `${indice * 0.1}s` }}>
      <span className="song-number">FAIXA {String(indice + 1).padStart(2, "0")}</span>

      <a href={m.link} target="_blank" rel="noopener noreferrer" title="Abrir no Spotify">
        <Cover musica={m} />
      </a>

      <div className="song-names">
        <a href={m.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <span className="song-title" style={{ color: m.cor }}>{m.titulo}</span>
        </a>
        <span className="song-artist" style={{ color: m.corArtista }}>{m.artista}</span>
      </div>

      <div className="song-tags">
        {m.generos.map((g) => (
          <span key={g} className="tag" style={{ color: m.cor, borderColor: m.cor }}>{g}</span>
        ))}
      </div>

      <dl className="meta">
        <Linha rotulo="Álbum" valor={m.album} />
        <Linha rotulo="Ano" valor={m.ano} />
        <Linha rotulo="Gravadora" valor={m.gravadora} />
      </dl>

      <p className="song-desc" style={{ color: m.corDesc }}>{m.desc}</p>

      {m.opiniao && (
        <p className="opiniao" style={{ color: m.cor }}>
          <b>Por que eu gosto</b>
          {m.opiniao}
        </p>
      )}

      <a className="listen" href={m.link} target="_blank" rel="noopener noreferrer">
        ▶ Ouvir no Spotify
      </a>
    </article>
  );
}
