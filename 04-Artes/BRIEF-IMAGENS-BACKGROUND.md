# BRIEF - IMAGENS DE BACKGROUND (SITE WM SOM E LUZ)

## Objetivo

Definir quais imagens de fundo gerar, o estilo visual e como cada imagem sera aplicada no site para manter leitura forte de texto e identidade da marca.

## Onde usar imagens de fundo

| Secao | Uso sugerido |
| --- | --- |
| Hero | Imagem principal full-bleed, escura, com overlay para garantir legibilidade do titulo e CTAs. |
| CTA final | Opcional: imagem de ambiente de evento com luzes, tambem com overlay escuro. |
| Outras secoes | Opcional: textura sutil (ruido/gradiente granular), sem competir com cards e textos. |

## Direcao de arte e requisitos gerais

- Tom: escuro, moderno e profissional.
- Temas: luzes de palco, feixes de luz, particulas, telao/LED em ambiente escuro, abstrato com cores da marca.
- Evitar: pessoas identificaveis, logos de terceiros e elementos que roubem foco do conteudo.
- Paleta WM: Verde `#B4D334`, Azul `#1E4A8F`, Roxo `#7B4FD3`, preto/cinza escuro.
- Formato: preferencialmente `16:9`.
- Resolucao minima Hero: `1920x1080` (aceitavel a partir de `1440px` de largura).

## Lista de imagens para gerar

### 1) Hero

- Nome sugerido: `hero-bg.webp` (ou `hero-bg.jpg`)
- Dimensoes: `1920x1080`
- Cenario: fundo escuro de evento com feixes suaves de luz azul e roxa, brilho verde sutil e composicao abstrata sem pessoas.
- Prompt sugerido (IA):
  - `Dark event stage background, soft blue and purple light beams, subtle green glow, no people, abstract, cinematic, professional, 16:9`
- Uso no site:
  - Secao: Hero (`web/app/page.tsx`)
  - Ajuste visual: manter gradiente da marca por cima com baixa opacidade
  - Overlay recomendado: `bg-black/60` a `bg-black/70`
  - Posicionamento: center + cover

### 2) CTA final (opcional)

- Nome sugerido: `cta-bg.webp` (ou `cta-bg.jpg`)
- Dimensoes: `1920x900`
- Cenario: ambiente escuro com luzes de show desfocadas ao fundo, sem elementos chamativos no centro.
- Prompt sugerido (IA):
  - `Dark concert ambience background with defocused stage lights, subtle blue purple tones, no people, minimal composition, cinematic, 16:9`
- Uso no site:
  - Secao: CTA final
  - Overlay recomendado: `bg-black/55` a `bg-black/65`
  - Posicionamento: center + cover

### 3) Textura sutil para secoes internas (opcional)

- Nome sugerido: `texture-dark-grain.webp`
- Dimensoes: `1600x900`
- Cenario: textura escura com granulado fino e leve variacao de cor (azul/roxo), quase imperceptivel.
- Prompt sugerido (IA):
  - `Subtle dark grain texture, very low contrast, slight blue and purple tint, minimal, seamless look`
- Uso no site:
  - Secoes: blocos escuros de conteudo
  - Opacidade baixa para nao competir com cards/texto

## Fluxo de implementacao no projeto

1. Gerar e selecionar as imagens conforme este brief.
2. Salvar em `web/public/images/`.
3. Aplicar no Hero primeiro (prioridade), com overlay escuro para preservar contraste.
4. Revisar legibilidade em desktop e mobile antes de aplicar nas demais secoes.
