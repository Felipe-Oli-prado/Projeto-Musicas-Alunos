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
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos9aii9V9LbltNVcAk5aiLQBD5biXPrmT_nROXTSNSQ&s=10", link: spotify("Psychosocial Slipknot"),
        desc: "All Hope Is Gone é o quarto álbum de estúdio da banda norte-americana de metal Slipknot, lançado em 26 de agosto de 2008 pela Roadrunner Records.",
        opiniao: ""
      },
      {
        titulo: "Blind", artista: "Korn",
        album: "Korn", ano: 1994, gravadora: "Immortal / Epic",
        generos: ["Nu metal"],
        cor: "#ff6ec7", corArtista: "#ff6ec7", corDesc: "#ff6ec7", capaCor: "#a33a3a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wmdhWWUh-JrO8q2GNOo9OrW9n1acKRsa1ATy9X0QJQ&s=10", link: spotify("Blind Korn"),
        desc: "\"Blind\" é o primeiro single e a faixa de abertura do álbum de estreia homônimo da banda americana de nu metal Korn, lançado em agosto de 1994.",
        opiniao: ""
      },
      {
        titulo: "Everlong", artista: "Foo Fighters",
        album: "The Colour and the Shape", ano: 1997, gravadora: "Roswell / Capitol Records",
        generos: ["Rock alternativo"],
        cor: "#b8c7ff", corArtista: "#c9a7ff", corDesc: "#c9a7ff", capaCor: "#3a5f9a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlk0lG6p735zRuf-8vlWvyoTMwk9X29S7DxosrM6uew&s=10", link: spotify("Everlong Foo Fighters"),
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
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTJO6FO0cc7MtbePJv9Qok_1jFO0zdeQ7fGSgQdSmog&s=10", link: spotify("1Night Cuco"),
        desc: "wannabewithu é o álbum de estreia (frequentemente chamado de mixtape) do cantor e compositor norte-americano Cuco (Omar Banos), lançado originalmente em 2016.",
        opiniao: ""
      },
      {
        titulo: "Fantasia", artista: "Chico Buarque",
        album: "Vida", ano: 1980, gravadora: "Philips Records",
        generos: ["MPB"],
        cor: "#9dff9d", corArtista: "#9dff9d", corDesc: "#b8f5b8", capaCor: "#a88b5a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6R5qA5Afe5l1c44kBqE8Keg6bocT9MUg-2i4_L_plfw&s=10", link: spotify("Fantasia Chico Buarque"),
        desc: "Vida (1980) é o décimo primeiro álbum de estúdio do cantor e compositor brasileiro Chico Buarque, lançado pela gravadora Philips Records. O disco marca uma fase de transição e maior maturidade existencialista na carreira do artista, aos 36 anos.",
        opiniao: ""
      },
      {
        titulo: "Let It Happen", artista: "Tame Impala",
        album: "Currents", ano: 2015, gravadora: "Modular Recordings",
        generos: ["Psicodélico", "Synth-pop"],
        cor: "#d9b8ff", corArtista: "#d9b8ff", corDesc: "#c9a7ff", capaCor: "#7a4fb0",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLMCPbdrVimlEADcQi1dHd1AruRITdTDcUlKVzzs_MA&s=10", link: spotify("Let It Happen Tame Impala"),
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
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZhFAk1kcnzPQABSyLKBkVWdvcSkMj34ftUR6JNAcmRw&s=10", link: spotify("Chove Chuva Jorge Ben Jor"),
        desc: "A música fala sobre amor e o medo de perder a pessoa amada. Tem um ritmo animado, misturando samba e MPB, e transmite sentimentos de carinho e paixão. 🤍🎶",
        opiniao: ""
      },
      {
        titulo: "Fly-day Chinatown", artista: "Yasuha",
        album: "Flapper", ano: 1981, gravadora: "",
        generos: ["City pop"],
        cor: "#9db8ff", corArtista: "#9db8ff", corDesc: "#8fb0ff", capaCor: "#4a4a7a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDd7Zh9S6mwwu7eQoJ5NnhHKqtoiAoti574mtMbrQwkg&s=10", link: spotify("Fly-day Chinatown Yasuha"),
        desc: "A música tem um ritmo animado e retrô, transmitindo a sensação de diversão e liberdade na vida noturna da cidade. 🌃🎶",
        opiniao: ""
      },
      {
        titulo: "nuts", artista: "Lil Peep",
        album: "", ano: "", gravadora: "",
        generos: ["Emo rap", "Cloud rap"],
        cor: "#ff8fa3", corArtista: "#ffb3c1", corDesc: "#ff8fa3", capaCor: "#5a3a3a",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpZndfb6jpqYBO42sX9lPy5EBq6sXeXWa2cGSGlF1qg&s=10", link: spotify("nuts Lil Peep"),
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

// Nome do arquivo da capa a partir do título: "Let It Happen" -> "let-it-happen"
function slug(texto) {
  return texto
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const EXTENSOES = [".jpg", ".png", ".webp", ".jpeg"];

function criarPlaceholder(m) {
  const d = document.createElement("div");
  d.className = "cover placeholder";
  d.style.background = `linear-gradient(135deg, ${m.capaCor}, #111)`;
  d.setAttribute("role", "img");
  d.setAttribute("aria-label", `Capa de ${m.titulo}`);
  return d;
}

function linha(rotulo, valor) {
  return valor ? `<dt>${rotulo}</dt><dd>${valor}</dd>` : "";
}

function criarMusica(m, i) {
  const art = document.createElement("article");
  art.className = "song fade-in";
  art.style.animationDelay = `${i * 0.1}s`;

  // Usa m.capa se existir; senão procura img/<titulo>.jpg (ou .png, .webp, .jpeg)
  const base = `img/${slug(m.titulo)}`;
  const capa = `<img class="cover" src="${m.capa || base + EXTENSOES[0]}" alt="Capa do álbum ${m.album || m.titulo}">`;

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
  // Se a imagem não existir, tenta as outras extensões e por fim usa o quadrado colorido
  let tentativa = 0;
  art.querySelectorAll("img.cover").forEach((img) => {
    img.addEventListener("error", () => {
      tentativa++;
      if (!m.capa && tentativa < EXTENSOES.length) {
        img.src = base + EXTENSOES[tentativa];
      } else {
        img.replaceWith(criarPlaceholder(m));
      }
    });
  });

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