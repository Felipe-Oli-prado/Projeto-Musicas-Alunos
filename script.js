// ============================================================
//  DADOS DOS PERFIS  (edite aqui para mudar o conteúdo do site)
//
//  Campos de cada música:
//   titulo, artista, album, ano, gravadora, generos[]  -> aparecem na ficha
//   desc      -> descrição da música/álbum
//   opiniao   -> "Por que eu gosto" (só aparece se for preenchido)
//   link      -> link da música no Spotify (hoje é uma busca; troque pelo link direto)
//   capa      -> caminho da imagem, ex: "img/psychosocial.jpg" (vazio = capa colorida)
//   cor / corArtista / corDesc / capaCor -> cores do card
// ============================================================
const spotify = (q) => "https://open.spotify.com/search/" + encodeURIComponent(q);

const perfis = {
  gustavo: {
    numero: 1,
    nome: "Gustavo",
    estilo: "Metal, nu metal e rock alternativo: guitarras pesadas e muita energia.",
    cor: "#ffc94d",
    anterior: null,
    proximo: { url: "felipe.html", nome: "Felipe" },
    musicas: [
      {
        titulo: "Psychosocial", artista: "Slipknot",
        album: "All Hope Is Gone", ano: 2008, gravadora: "Roadrunner Records",
        generos: ["Heavy metal", "Groove metal"],
        cor: "#ffc94d", corArtista: "#ffe08a", corDesc: "#ffc94d", capaCor: "#8a7a4a",
        capa: "", link: spotify("Psychosocial Slipknot"),
        desc: "All Hope Is Gone é o quarto álbum de estúdio da banda norte-americana de metal Slipknot, lançado em 26 de agosto de 2008 pela Roadrunner Records.",
        opiniao: ""
      },
      {
        titulo: "Blind", artista: "Korn",
        album: "Korn", ano: 1994, gravadora: "Immortal / Epic",
        generos: ["Nu metal"],
        cor: "#ff6ec7", corArtista: "#ff6ec7", corDesc: "#ff6ec7", capaCor: "#a33a3a",
        capa: "", link: spotify("Blind Korn"),
        desc: "\"Blind\" é o primeiro single e a faixa de abertura do álbum de estreia homônimo da banda americana de nu metal Korn, lançado em agosto de 1994.",
        opiniao: ""
      },
      {
        titulo: "Everlong", artista: "Foo Fighters",
        album: "The Colour and the Shape", ano: 1997, gravadora: "Roswell / Capitol Records",
        generos: ["Rock alternativo"],
        cor: "#b8c7ff", corArtista: "#c9a7ff", corDesc: "#c9a7ff", capaCor: "#3a5f9a",
        capa: "", link: spotify("Everlong Foo Fighters"),
        desc: "The Colour and the Shape é o segundo álbum de estúdio da banda americana de rock Foo Fighters, lançado em 20 de maio de 1997 pelas gravadoras Roswell e Capitol Records.",
        opiniao: ""
      }
    ]
  },

  felipe: {
    numero: 2,
    nome: "Felipe",
    estilo: "Bedroom pop, MPB e rock psicodélico: sons suaves, nostálgicos e cheios de sintetizador.",
    cor: "#ff6ec7",
    anterior: { url: "index.html", nome: "Gustavo" },
    proximo: { url: "miguel.html", nome: "Miguel" },
    musicas: [
      {
        titulo: "1Night", artista: "Cuco",
        album: "wannabewithu", ano: 2016, gravadora: "",
        generos: ["Bedroom pop", "Indie"],
        cor: "#ff6ec7", corArtista: "#ff6ec7", corDesc: "#ff6ec7", capaCor: "#c0398f",
        capa: "", link: spotify("1Night Cuco"),
        desc: "wannabewithu é o álbum de estreia (frequentemente chamado de mixtape) do cantor e compositor norte-americano Cuco (Omar Banos), lançado originalmente em 2016.",
        opiniao: ""
      },
      {
        titulo: "Fantasia", artista: "Chico Buarque",
        album: "Vida", ano: 1980, gravadora: "Philips Records",
        generos: ["MPB"],
        cor: "#9dff9d", corArtista: "#9dff9d", corDesc: "#b8f5b8", capaCor: "#a88b5a",
        capa: "", link: spotify("Fantasia Chico Buarque"),
        desc: "Vida (1980) é o décimo primeiro álbum de estúdio do cantor e compositor brasileiro Chico Buarque, lançado pela gravadora Philips Records. O disco marca uma fase de transição e maior maturidade existencialista na carreira do artista, aos 36 anos.",
        opiniao: ""
      },
      {
        titulo: "Let It Happen", artista: "Tame Impala",
        album: "Currents", ano: 2015, gravadora: "Modular Recordings",
        generos: ["Psicodélico", "Synth-pop"],
        cor: "#d9b8ff", corArtista: "#d9b8ff", corDesc: "#c9a7ff", capaCor: "#7a4fb0",
        capa: "", link: spotify("Let It Happen Tame Impala"),
        desc: "Lançado em 17 de julho de 2015, Currents é o terceiro álbum de estúdio do projeto australiano Tame Impala. O disco marca uma transição sonora significativa do rock psicodélico tradicional para sonoridades voltadas ao pop, disco, synth-pop e R&B, com forte protagonismo dos sintetizadores.",
        opiniao: ""
      }
    ]
  },

  miguel: {
    numero: 3,
    nome: "Miguel R",
    estilo: "Samba, city pop e rap emo: do ritmo brasileiro clássico ao som noturno e melancólico.",
    cor: "#9db8ff",
    anterior: { url: "felipe.html", nome: "Felipe" },
    proximo: null,
    musicas: [
      {
        titulo: "Chove Chuva", artista: "Jorge Ben Jor",
        album: "Samba Esquema Novo", ano: 1963, gravadora: "Philips",
        generos: ["Samba", "MPB"],
        cor: "#e8d59a", corArtista: "#e8d59a", corDesc: "#e0b24d", capaCor: "#b5623a",
        capa: "", link: spotify("Chove Chuva Jorge Ben Jor"),
        desc: "A música fala sobre amor e o medo de perder a pessoa amada. Tem um ritmo animado, misturando samba e MPB, e transmite sentimentos de carinho e paixão. 🤍🎶",
        opiniao: ""
      },
      {
        titulo: "Fly-day Chinatown", artista: "Yasuha",
        album: "Flapper", ano: 1981, gravadora: "",
        generos: ["City pop"],
        cor: "#9db8ff", corArtista: "#9db8ff", corDesc: "#8fb0ff", capaCor: "#4a4a7a",
        capa: "", link: spotify("Fly-day Chinatown Yasuha"),
        desc: "A música tem um ritmo animado e retrô, transmitindo a sensação de diversão e liberdade na vida noturna da cidade. 🌃🎶",
        opiniao: ""
      },
      {
        titulo: "nuts", artista: "Lil Peep",
        album: "", ano: "", gravadora: "",
        generos: ["Emo rap", "Cloud rap"],
        cor: "#ff8fa3", corArtista: "#ffb3c1", corDesc: "#ff8fa3", capaCor: "#5a3a3a",
        capa: "", link: spotify("nuts Lil Peep"),
        desc: "A música tem uma melodia marcante e uma vibe própria. Para descrever melhor seu significado, preciso saber o artista principal. 🎧💗",
        opiniao: ""
      }
    ]
  }
};

// ============================================================
//  RENDERIZAÇÃO
// ============================================================
const perfil = perfis[document.body.dataset.perfil];
document.documentElement.style.setProperty("--accent", perfil.cor);

function renderHero() {
  const generos = new Set(perfil.musicas.flatMap((m) => m.generos));
  const anos = perfil.musicas.map((m) => Number(m.ano)).filter(Boolean);
  const maisAntiga = anos.length ? Math.min(...anos) : null;

  const tags = [...generos].map((g) => `<span class="tag">${g}</span>`).join("");

  document.getElementById("hero").innerHTML = `
    <div class="avatar">${perfil.nome.charAt(0)}</div>
    <div class="hero-info">
      <div class="hero-kicker">Perfil ${perfil.numero} de 3</div>
      <h1 class="hero-name">Página de músicas — ${perfil.nome}</h1>
      <p class="hero-estilo">${perfil.estilo}</p>
      <div class="tags">${tags}</div>
    </div>
    <div class="hero-stats">
      <div class="stat"><strong>${perfil.musicas.length}</strong><span>Músicas</span></div>
      <div class="stat"><strong>${generos.size}</strong><span>Gêneros</span></div>
      ${maisAntiga ? `<div class="stat"><strong>${maisAntiga}</strong><span>Mais antiga</span></div>` : ""}
    </div>
  `;
}

function linha(rotulo, valor) {
  return valor ? `<dt>${rotulo}</dt><dd>${valor}</dd>` : "";
}

function criarMusica(m, i) {
  const art = document.createElement("article");
  art.className = "song fade-in";
  art.style.animationDelay = `${i * 0.1}s`;

  const capa = m.capa
    ? `<img class="cover" src="${m.capa}" alt="Capa do álbum ${m.album || m.titulo}">`
    : `<div class="cover placeholder" style="background:linear-gradient(135deg, ${m.capaCor}, #111)" role="img" aria-label="Capa de ${m.titulo}"></div>`;

  const tags = m.generos.map((g) => `<span class="tag" style="color:${m.cor};border-color:${m.cor}">${g}</span>`).join("");

  art.innerHTML = `
    <span class="song-number">FAIXA ${String(i + 1).padStart(2, "0")}</span>
    <a href="${m.link}" target="_blank" rel="noopener" title="Abrir no Spotify">${capa}</a>
    <div class="song-names">
      <a href="${m.link}" target="_blank" rel="noopener" style="text-decoration:none">
        <span class="song-title" style="color:${m.cor}">${m.titulo}</span>
      </a>
      <span class="song-artist" style="color:${m.corArtista}">${m.artista}</span>
    </div>
    <div class="song-tags">${tags}</div>
    <dl class="meta">
      ${linha("Álbum", m.album)}
      ${linha("Ano", m.ano)}
      ${linha("Gravadora", m.gravadora)}
    </dl>
    <p class="song-desc" style="color:${m.corDesc}">${m.desc}</p>
    ${m.opiniao ? `<p class="opiniao" style="color:${m.cor}"><b>Por que eu gosto</b>${m.opiniao}</p>` : ""}
    <a class="listen" href="${m.link}" target="_blank" rel="noopener">▶ Ouvir no Spotify</a>
  `;
  return art;
}

function renderSongs() {
  const el = document.getElementById("songs");
  perfil.musicas.forEach((m, i) => el.appendChild(criarMusica(m, i)));
}

function renderPager() {
  const a = perfil.anterior ? `<a href="${perfil.anterior.url}">← ${perfil.anterior.nome}</a>` : `<span></span>`;
  const p = perfil.proximo ? `<a href="${perfil.proximo.url}">${perfil.proximo.nome} →</a>` : `<span></span>`;
  document.getElementById("pager").innerHTML = a + p;
}

renderHero();
renderSongs();
renderPager();
