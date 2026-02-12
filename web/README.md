# WM Som e Luz — Site

Site oficial da WM Som e Luz, construído com Next.js 15, TypeScript e Tailwind CSS.

---

## Como começar

### 1. Instalar dependências

```bash
cd web
npm install
```

### 2. Copiar o logo

Copie o arquivo do logo para a pasta `public`:

```bash
# O logo está em: ../04-Artes/logo-wm-som-luz.png
# Copie para: ./public/logo.png
```

Ou use o comando:

```powershell
Copy-Item "../04-Artes/logo-wm-som-luz.png" "public/logo.png"
```

### 3. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

---

## Estrutura do projeto

```
web/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Home page
│   ├── globals.css          # Estilos globais + Tailwind
│   ├── casamentos/          # Página de casamentos
│   ├── formaturas/          # Página de formaturas
│   ├── aniversarios/        # Página de aniversários
│   ├── eventos-corporativos/ # Página de eventos corporativos
│   ├── pacotes/             # Página de pacotes
│   ├── sobre/               # Página sobre
│   └── contato/             # Página de contato
├── components/              # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Diferenciais.tsx
│   ├── Frentes.tsx
│   ├── Pacotes.tsx
│   ├── ComoFunciona.tsx
│   ├── FAQ.tsx
│   └── CTA.tsx
├── public/                  # Arquivos públicos
│   ├── logo.png
│   ├── LOGO-BRIEF.md
│   └── favicon.ico
├── content/                 # Conteúdo do site (JSON)
│   └── (link simbólico para ../content)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## Design

### Paleta de cores (do logo WM)

```css
/* Cores primárias */
--verde: #B4D334;        /* Verde-amarelado (W do logo) */
--azul: #1E4A8F;         /* Azul escuro (M do logo) */
--roxo: #7B4FD3;         /* Roxo (transição das ondas) */

/* Cores de acento (vibe anos 80-90) */
--rosa-neon: #FF006E;
--amarelo-dourado: #FFD700;

/* Neutros */
--preto: #000000;
--cinza-escuro: #2A2A2A;
--cinza-medio: #4A4A4A;
--branco: #FFFFFF;
```

### Tipografia

- **Títulos**: Montserrat Bold ou Poppins Bold
- **Corpo**: Inter ou Open Sans

### Elementos visuais

- Ondas sonoras animadas (CSS)
- Bola de discoteca (SVG + animação)
- Gradientes verde → azul → roxo
- Silhouetas dançando
- Raios de luz

---

## Conteúdo

O conteúdo do site está em `../content/site-copy.json`. Leia esse arquivo para preencher as páginas.

Exemplo de uso no React:

```tsx
import siteData from '@/content/site-copy.json';

export default function Hero() {
  return (
    <section>
      <h1>{siteData.hero.title}</h1>
      <p>{siteData.hero.subtitle}</p>
    </section>
  );
}
```

---

## Agent Skills (opcional)

Para melhor guia de desenvolvimento com IA, instale as agent-skills do Vercel:

```bash
npx skills add vercel-labs/agent-skills
```

Selecione:
- `react-best-practices`
- `web-design-guidelines`
- `vercel-deploy-claimable`

---

## Deploy

### Vercel (recomendado)

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte o repositório GitHub
3. Configure domínio: `wmsomeluz.com.br`
4. Deploy automático a cada push

### Manual

```bash
npm run build
npm run start
```

---

## Próximos passos

1. ✅ Instalar dependências: `npm install`
2. ✅ Copiar logo para `public/logo.png`
3. ⬜ Criar componentes (Header, Footer, Hero, etc.)
4. ⬜ Criar páginas (Home, Casamentos, Formaturas, etc.)
5. ⬜ Adicionar animações (ondas sonoras, bola de discoteca)
6. ⬜ Testar responsividade (mobile, tablet, desktop)
7. ⬜ Otimizar SEO (meta tags, schema.org)
8. ⬜ Deploy no Vercel

---

## Referências

- **Design**: Veja `public/LOGO-BRIEF.md` para detalhes sobre o logo e paleta
- **SEO**: Veja `../content/seo-keywords.md` para palavras-chave
- **Conteúdo**: Veja `../content/site-copy.json` para todo o conteúdo do site
- **Negócio**: Veja `../01-Empresa/sobre-o-negocio.md` para informações da empresa

---

## Contato

- **WhatsApp**: (15) 99116-3093
- **Instagram**: @wmsomeluz
- **Facebook**: WM Som e Luz | Sorocaba SP
- **Domínio**: wmsomeluz.com.br
