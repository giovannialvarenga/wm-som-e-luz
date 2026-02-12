# Passo a passo - Hero com imagem de fundo

## Objetivo

Ativar imagem de fundo no Hero mantendo legibilidade alta e visual da marca.

## 1) Gerar a imagem

- Use o brief em `04-Artes/BRIEF-IMAGENS-BACKGROUND.md`.
- Gere a imagem do Hero em proporcao `16:9`.
- Resolucao recomendada: `1920x1080`.
- Salve com nome final: `hero-bg.webp` (preferencial) ou `hero-bg.jpg`.

## 2) Salvar no lugar certo

- Crie a pasta (se ainda nao existir): `web/public/images/`.
- Coloque o arquivo em: `web/public/images/hero-bg.webp`.

## 3) Ativar no codigo

- Abra `web/app/page.tsx`.
- Localize as constantes no topo:
  - `HERO_BACKGROUND_SRC`
  - `HERO_BACKGROUND_ENABLED`
- Deixe:
  - `HERO_BACKGROUND_SRC = "/images/hero-bg.webp"`
  - `HERO_BACKGROUND_ENABLED = true`

## 4) Rodar e validar localmente

- Na pasta `web`, rode:
  - `npm run dev` para revisar visual.
- Verifique no navegador:
  - Texto principal legivel no desktop e mobile.
  - CTAs visiveis e com bom contraste.
  - Imagem sem distorcao (cover) e sem artefatos.

## 5) Ajustes finos (se precisar)

- Se o texto ficar pouco legivel:
  - aumente o overlay escuro (`bg-black/70` para `bg-black/75`).
- Se a imagem ficar muito apagada:
  - aumente opacidade da imagem (`opacity-45` para `opacity-55`).
- Se a imagem brigar com o gradiente:
  - reduza o gradiente (`opacity-25` para `opacity-15`).

## 6) Checklist de conclusao

- [ ] Imagem em `web/public/images/hero-bg.webp`
- [ ] `HERO_BACKGROUND_ENABLED = true`
- [ ] Hero legivel em desktop e mobile
- [ ] CTAs destacados e clicaveis
- [ ] Visual aprovado no navegador
