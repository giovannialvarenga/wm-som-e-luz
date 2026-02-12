# Mockup de referência — Home WM Som e Luz (design moderno)

Documento para implementação do redesign. Direção: **moderno e limpo** (referências: [Enhanced.ai](https://enhanced.ai/), [Kazara DJ](https://www.kazaradj.com.br/)).

---

## Referências de design

- **Enhanced.ai:** Layout limpo, muito espaço, tipografia forte, cores usadas com moderação, CTAs evidentes.
- **Kazara DJ:** Hero impactante ("DJ | LIVE DJ"), blocos bem definidos, grid de serviços/eventos, integração redes, contato claro.
- **Concorrentes (benchmark):** [GP Som e Luz](https://www.gpsomeluz.com.br/), [JA Som e Luz](https://ja.araujodev.com.br/), [Atomix](http://www.atomixsomeluz.com.br/), [Parfait](https://parfaitsomeluz.com.br/).

---

## Wireframe da home

```
+------------------------------------------------------------------+
| HEADER (fixo)                                                     |
| [Logo]    Diferenciais  Pacotes  Como funciona  [WhatsApp CTA]     |
+------------------------------------------------------------------+
| HERO                                                              |
|   H1: Som e iluminação profissional + festa 100% em videoclipes  |
|   Subtitle (1-2 linhas)                                           |
|   [Pedir orçamento no WhatsApp]  [Ligar: (15) 99116-3093]         |
|   (opcional) seta ou "Conheça os pacotes"                         |
+------------------------------------------------------------------+
| DIFERENCIAIS                                                      |
|   H2: Por que a WM Som e Luz é diferente?                         |
|   Lead: 1 linha                                                   |
|   [Card] [Card] [Card] [Card]   (4 cols, borda neutra + ícone)     |
+------------------------------------------------------------------+
| PACOTES                                                           |
|   H2: Escolha o pacote ideal                                       |
|   Lead: 1 linha (copy revisado)                                    |
|   +-------------+  +-------------+  +-------------+                 |
|   | Básico      |  | MAIS PEDIDO |  | Premium     |                 |
|   | R$ 700+     |  | Intermediário|  | R$ 3.000+   |                 |
|   | descrição   |  | R$ 1.500+   |  | descrição   |                 |
|   | lista (alt  |  | lista (alt  |  | lista (alt  |                 |
|   |  fixa/scroll)|  |  fixa/scroll)|  |  fixa/scroll)|                 |
|   | ideal_para  |  | ideal_para  |  | ideal_para  |                 |
|   | [Pedir orç.]|  | [Pedir orç.]|  | [Pedir orç.]|  <- mesma base  |
|   +-------------+  +-------------+  +-------------+                 |
+------------------------------------------------------------------+
| FRENTES                                                           |
|   H2: Atendemos 4 tipos de eventos                                |
|   [Card] [Card] [Card] [Card]   ícone + título + desc + pacote    |
+------------------------------------------------------------------+
| COMO FUNCIONA                                                     |
|   H2: Como funciona   Lead: 1 linha                               |
|   (1) Contato e orçamento  |  (2) Personalização  |  (3) Show!     |
+------------------------------------------------------------------+
| CTA FINAL                                                         |
|   H2: Pronto para transformar seu evento?                          |
|   Subtitle + [WhatsApp] [Ligar]                                   |
+------------------------------------------------------------------+
| FOOTER                                                            |
|   Logo | Telefone | WhatsApp | Instagram | Endereço (opcional)      |
+------------------------------------------------------------------+
```

---

## Regras de estilo (moderno)

### Pacotes — card
- Container do card: `flex flex-col h-full` (ou grid com `items-stretch`).
- Conteúdo: `flex-1 flex flex-col min-h-0`.
- Lista de inclusos: `flex-1 min-h-[180px] max-h-[200px] overflow-y-auto`.
- CTA: `mt-auto pt-6` e botão `w-full` para alinhar os três botões na mesma base.

### Pacotes — destaque
- Intermediário: borda amarela, badge "Mais pedido", preço em amarelo; demais cards em verde para preço/checkmarks.

### Espaçamento
- Seções: `py-16 md:py-24`.
- Container: `max-w-7xl mx-auto px-6`.

### Títulos
- Hero: único H1 da página.
- Seções: H2 com `text-3xl md:text-4xl` (um nível abaixo do Hero).

### Diferenciais (moderno)
- Borda única neutra (cinza); cor apenas no ícone ou no hover. Evitar quatro bordas coloridas diferentes.

### Header
- Altura fixa ~64px, fundo escuro, logo à esquerda, links âncora ao centro/direita, CTA à direita.

### Paleta (uso contido)
- Fundos: preto e cinza escuro.
- Cor (verde, azul, roxo, amarelo): títulos, CTAs, um destaque (card Mais pedido). Sem excesso de gradientes ou bordas coloridas em todos os elementos.

---

## Copy (revisado)

- Hero subtitle: usar "Dos anos 70 aos 90" (não "Do anos").
- Diferenciais item 1 text: "Dos anos 70 aos 90 até hits atuais."
- Pacotes lead: "Do básico ao premium: equipamento profissional e festa em videoclipes em todos os pacotes."
- CTAs: manter "Pedir orçamento no WhatsApp" e "Ligar: (15) 99116-3093" em todos os pontos.
