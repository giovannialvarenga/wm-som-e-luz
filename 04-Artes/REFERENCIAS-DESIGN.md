# Referências de design — WM Som e Luz

Documento para guiar a evolução visual do site e das artes. Preencha os links e notas conforme for pesquisando.

---

## Moodboard

Links para sites ou imagens que representam a vibe desejada (retrô, disco, eventos). Anote em 1–2 frases o que aproveitar de cada um.

1. **Link ou imagem:** _[cole aqui]_  
   **O que aproveitar:** _ex.: cores, tipografia, layout de pacotes, hero_

2. **Link ou imagem:** _[cole aqui]_  
   **O que aproveitar:** _

3. **Link ou imagem:** _[cole aqui]_  
   **O que aproveitar:** _

4. **Link ou imagem:** _[cole aqui]_  
   **O que aproveitar:** _

5. **Link ou imagem:** _[cole aqui]_  
   **O que aproveitar:** _

**Sugestões de busca:** Dribbble/Behance/Pinterest — "disco website", "80s event website", "retro party design", "event DJ website", "pricing cards dark theme".

---

## Paleta WM Som e Luz

| Cor           | Hex       | Uso sugerido                          |
|---------------|-----------|----------------------------------------|
| Verde         | `#B4D334` | Destaques, CTAs, bordas, preços        |
| Azul          | `#1E4A8F` | Hero gradiente, cards, links           |
| Roxo          | `#7B4FD3` | Transições, hover, gradiente           |
| Rosa neon     | `#FF006E` | Acentos, hover em elementos secundários |
| Amarelo       | `#FFD700` | Destaque “mais pedido”, CTAs secundários |
| Preto         | `#000000` | Fundo principal                       |
| Cinza escuro  | `#2A2A2A` | Fundo de seções, cards                 |
| Cinza médio   | `#4A4A4A` | Bordas, texto secundário              |

**HSL (usado no CSS):**  
- Verde: `180 73% 52%` | Azul: `216 65% 32%` | Roxo: `256 62% 58%`  
- Rosa neon: `335 100% 50%` | Amarelo: `51 100% 50%`

---

## Tipografia

**Atual (site):**
- **Títulos:** Montserrat (700, 800, 900) — [Google Fonts](https://fonts.google.com/specimen/Montserrat)
- **Corpo:** Inter (300–700) — [Google Fonts](https://fonts.google.com/specimen/Inter)

**Candidatas para títulos (retrô/display):**
- **Fonte 1:** _ex.: Bebas Neue, Oswald_ — [Google Fonts](https://fonts.google.com/) — _anote o link_
- **Fonte 2:** _[nome]_ — _[link]_  

Filtrar no Google Fonts por "display" ou "retro" e testar em títulos (Hero, nomes dos pacotes).

---

## Elementos visuais (anos 70–90)

- **Bola de discoteca:** _ilustração SVG / ícone / imagem — usar em: Hero, rodapé, fundo_
- **Ondas sonoras:** _já existe animação em CSS (`.animate-wave`); evoluir com mais curvas ou SVG_
- **Silhuetas dançando:** _ilustração ou ícones — usar em: Hero, lateral, separadores_
- **Raios de luz:** _gradientes, linhas ou SVG — usar em: fundos, destaques_

Definir para cada elemento: **ilustração**, **ícone SVG** ou **imagem**, e em **quais seções** usar.

---

## Layout das seções (home)

Ordem atual e propósito de cada bloco:

1. **Hero** — Título + subtítulo + 2 CTAs (WhatsApp, Ligar). Fundo escuro, gradiente WM, ondas (placeholder).
2. **Diferenciais** — 4 cards em grid (videoclipes, personalização, qualidade técnica, VDJ).
3. **Pacotes** — 3 cards (Básico, Intermediário em destaque, Premium) com preço, descrição, lista de inclusos, CTA “Pedir orçamento”.
4. **Frentes** — 4 tipos de evento (Casamentos, Formaturas, Outras Festas, Corporativo) com ícone, descrição e pacote recomendado.
5. **Como funciona** — 3 passos numerados (Contato, Playlist, Show).
6. **CTA final** — Título + subtítulo + botões WhatsApp e Ligar; fundo em gradiente.

**Wireframe (texto):**
```
[ Hero full-width ]
[ Diferenciais — 4 colunas ]
[ Pacotes — 3 colunas, centro destacado ]
[ Frentes — 4 colunas ]
[ Como funciona — lista vertical ]
[ CTA final full-width ]
```

Para mockup visual, usar Figma ou Canva e referenciar o link ou anexo aqui.

---

## Notas

- Fonte principal do conteúdo do site: `content/site-copy.json` (na raiz do projeto). Cópia para o build do site: `web/content/site-copy.json`.
- Logo: ver [README-LOGO.md](README-LOGO.md) e `web/public/LOGO-BRIEF.md`.
