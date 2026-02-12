# Brief – Logo WM Som e Luz (versão refresh)

## Objetivo

Atualizar o logo mantendo o conceito que o cliente gostava: **monograma WM + ondas/frequência + texto "som e luz"**, com visual **mais limpo e atual** (flat, sem 3D pesado).

## Conceito a manter

- **Monograma WM**: letras W e M como elemento central.
- **Ondas/frequência**: elemento gráfico de ondas sonoras (forma de onda ou barras de frequência) integrado ao logo.
- **Texto "som e luz"**: em minúsculas, complementando o símbolo.
- **Significado**: som e iluminação profissional, evento, VDJ.

## Paleta WM (obrigatória)

| Cor    | Hex       | Uso principal        |
|--------|-----------|------------------------|
| Verde  | #B4D334   | W, acentos, ondas     |
| Azul   | #1E4A8F   | M, ondas, profundidade|
| Roxo   | transição | Transição azul–verde  |

Evitar cores fora da paleta (ex.: laranja forte pode ser suavizado ou substituído por verde/amarelo da marca).

## O que atualizar (estilo “refresh”)

- **Menos 3D**: sem efeito metálico pesado, sem borda grossa tipo “alto-relevo”. Permitir sombra ou profundidade sutil.
- **Linhas limpas**: ondas com traços mais suaves e definidos; bordas nítidas.
- **Flat ou quase flat**: priorizar formas chapadas; gradientes leves são aceitáveis.
- **Emissão/barras**: as barras laterais (tipo “emissão de som/luz”) podem ser reduzidas, simplificadas ou traduzidas em um detalhe mais discreto (ex.: pequenas linhas ou ondulação sutil).
- **Fundo**: **sempre transparente** (PNG com alpha) para uso em header/footer escuros.

## O que evitar

- Gradiente 3D muito marcado (bolha, metal cromado).
- Borda metálica grossa ou aparência de “selo”.
- Texto ilegível (contraste suficiente entre letras e fundo ao usar sobre fundo escuro).
- Fundo branco ou colorido opaco.

## Requisitos técnicos

| Item            | Especificação |
|-----------------|----------------|
| Formato         | PNG com fundo transparente |
| Proporção       | Preferencialmente horizontal (ex.: ~3:1 ou 2:1) para header; quadrado ou horizontal para favicon. |
| Uso no header   | Altura de exibição ~56px (width proporcional, ex.: 156px). |
| Uso no footer   | Altura de exibição ~48px (width proporcional, ex.: 132px). |
| Resolução       | Exportar em tamanho 2x ou 3x para telas retina (ex.: 312×112 px ou maior). |

## Onde usar no site

- **Header**: [web/app/components/Header.tsx](web/app/components/Header.tsx) – `src="/logo.png"`.
- **Footer**: [web/app/components/Footer.tsx](web/app/components/Footer.tsx) – `src="/logo.png"`.
- **Favicon** (opcional): versão quadrada ou ícone WM em `web/app/icon.png` ou `favicon.ico`.

## Referência da versão original

A versão que o cliente gostava (circular, com WM, ondas e texto “som e luz”) está referenciada em [README-LOGO.md](README-LOGO.md). Esta versão refresh preserva o conceito com estilo atualizado para uso em **web/public/logo.png**.
