# Projeto Músicas Alunos (SESISENAI)

Site em React (Vite) com a página de músicas favoritas de três alunos.

## Rodar
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/
npm run preview  # testa o build
```

## Onde editar
- `src/data/perfis.js`: textos, cores, links do Spotify e opinião ("Por que eu gosto") de cada música.
- `public/img/`: capas dos álbuns, com o nome da música em minúsculas, sem acento e com hífens
  (ex.: `psychosocial.jpg`, `let-it-happen.png`, `fly-day-chinatown.jpg`).
  Aceita .jpg, .png, .webp e .jpeg. Sem imagem, aparece um quadrado colorido.
