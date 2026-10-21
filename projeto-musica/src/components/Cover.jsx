import { useState } from "react";

const EXTENSOES = [".jpg", ".png", ".webp", ".jpeg"];

// "Let It Happen" -> "let-it-happen"
function slug(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Mostra a capa de public/img/<titulo>.(jpg|png|webp|jpeg).
// Se nenhuma existir, mostra um quadrado colorido com uma nota musical.
export default function Cover({ musica }) {
  const [tentativa, setTentativa] = useState(0);
  const [falhou, setFalhou] = useState(false);

  if (falhou) {
    return (
      <div
        className="cover placeholder"
        style={{ background: `linear-gradient(135deg, ${musica.capaCor}, #111)` }}
        role="img"
        aria-label={`Capa de ${musica.titulo}`}
      />
    );
  }

  const src =
    musica.capa ||
    `${import.meta.env.BASE_URL}img/${slug(musica.titulo)}${EXTENSOES[tentativa]}`;

  function aoFalhar() {
    if (!musica.capa && tentativa < EXTENSOES.length - 1) setTentativa(tentativa + 1);
    else setFalhou(true);
  }

  return (
    <img
      className="cover"
      src={src}
      alt={`Capa do álbum ${musica.album || musica.titulo}`}
      onError={aoFalhar}
    />
  );
}
