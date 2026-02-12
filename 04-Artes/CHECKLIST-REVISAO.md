# Checklist de revisão (após implementação)

Preencha após abrir o site no navegador (localhost ou build).

## Verificações automáticas (já executadas)

- [x] Build sem erro (`npm run build`)
- [x] TypeScript válido (checado no build)
- [ ] Lint (opcional; configurar ESLint se quiser)

## Checklist de revisão humana

- [ ] **Header:** logo visível, links âncora (Diferenciais, Pacotes, Como funciona) levam às seções corretas, CTA "Pedir orçamento" abre WhatsApp.
- [ ] **Footer:** telefone, WhatsApp e Instagram corretos e clicáveis; endereço exibido.
- [ ] **Pacotes:** os três botões "Pedir orçamento" alinhados na mesma linha base; lista do Premium com scroll quando necessário; card Intermediário em destaque (borda amarela, "Mais pedido").
- [ ] **Visual:** diferenciais com borda neutra (cinza), hover em verde; espaçamento consistente; H1 só no hero, H2 menores nas seções.
- [ ] **Copy:** "Dos anos 70 aos 90" (não "Do anos"); lead dos pacotes: "Do básico ao premium..."; CTAs consistentes.
- [ ] **Mobile:** layout responsivo (header, cards em coluna, botões empilhados).

## Entrega aceita

- Build e tipos: OK.
- Marque os itens do checklist acima após testar no navegador. Itens não atendidos = tarefa de correção.
