# WM Som e Luz — Projeto Completo

Este é o projeto completo da WM Som e Luz, replicado do processo usado no Paula Alvarenga Personal Cooker.

---

## Estrutura do projeto

```
WM Som e Luz/
├── 01-Empresa/                  # Documentos da empresa
│   ├── sobre-o-negocio.md       # Informações completas do negócio
│   ├── servicos-e-equipamentos.md  # Lista completa de serviços
│   ├── mensagem-whatsapp.md     # Templates de mensagens
│   └── pesquisa-mercado/
│       ├── competitors.csv       # Concorrentes em Sorocaba
│       ├── icp.md                # Perfil do cliente ideal (4 frentes)
│       └── market-summary.md     # Resumo de mercado e posicionamento
│
├── 03-Instagram/                # Conteúdo para Instagram
│   ├── bio-instagram.txt        # 4 opções de bio
│   ├── posts/
│   │   ├── calendario.md        # Calendário de 2 semanas
│   │   ├── COMO-USAR.md         # Guia de como usar os posts
│   │   └── semana-1/
│   │       └── seg--carrossel-como-funciona/  # Exemplo de post completo
│   └── extras/
│       └── agente-gerar-novos-posts.txt  # Prompt para IA gerar novos posts
│
├── 04-Artes/                    # Logos e artes
│   ├── logo-wm-som-luz.png      # Logo principal (COPIAR MANUALMENTE)
│   └── README-LOGO.md           # Instruções sobre o logo
│
├── content/                     # Conteúdo do site
│   ├── site-copy.json           # TODO o conteúdo do site (JSON estruturado)
│   ├── seo-keywords.md          # Palavras-chave para SEO
│   └── social/                  # Conteúdo social (futuro)
│
└── web/                         # Site Next.js
    ├── app/                     # Páginas Next.js 15 (App Router)
    │   ├── layout.tsx           # Layout principal
    │   ├── page.tsx             # Home page (com Hero + Diferenciais)
    │   └── globals.css          # Estilos globais + Tailwind
    ├── components/              # Componentes React (criar conforme necessário)
    ├── public/                  # Arquivos públicos
    │   ├── logo.png             # Logo (COPIAR MANUALMENTE)
    │   └── LOGO-BRIEF.md        # Brief completo do logo
    ├── package.json             # Dependências do projeto
    ├── tsconfig.json            # Configuração TypeScript
    ├── tailwind.config.ts       # Configuração Tailwind (cores WM)
    ├── next.config.ts           # Configuração Next.js
    ├── postcss.config.js        # Configuração PostCSS
    ├── .gitignore               # Arquivos ignorados pelo Git
    └── README.md                # Instruções do site
```

---

## Como começar

### 1. Copiar o logo

O logo está disponível mas precisa ser copiado manualmente. Veja instruções em:
- `04-Artes/README-LOGO.md`

Ou use o comando PowerShell:

```powershell
$source = "C:\Users\alvar\.cursor\projects\c-Users-alvar-OneDrive-Desktop-Paula-Alvarenga-Personal-Cooker\assets\c__Users_alvar_AppData_Roaming_Cursor_User_workspaceStorage_2e49464b9b42f2bd25b8ff1f2fda0b85_images_ChatGPT_Image_11_de_fev._de_2026__23_35_53-a39ec73c-f147-4ca9-b3eb-e83fbdecccdd.png"

Copy-Item $source "04-Artes\logo-wm-som-luz.png"
Copy-Item $source "web\public\logo.png"
```

### 2. Instalar dependências do site

```bash
cd web
npm install
```

### 3. Rodar o site em desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

---

## Dados da WM Som e Luz

- **Nome:** WM SOM e LUZ
- **Domínio:** wmsomeluz.com.br
- **WhatsApp:** (15) 99116-3093
- **Telefone:** (15) 99116-3093
- **Instagram:** @wmsomeluz
- **Facebook:** WM Som e Luz | Sorocaba SP
- **Endereço:** Av. Ipanema, 5867 - Jardim Novo Horizonte, Sorocaba - SP, 18071-801
- **Atendimento:** Todo o estado de São Paulo

### Diferenciais

1. 🎬 **Festa 100% em videoclipes** — Todas as músicas no telão sincronizadas
2. 🎵 **Personalização total** — Você escolhe 100% das músicas
3. 🔊 **Qualidade técnica altíssima** — Equipamentos profissionais de última geração
4. 🎉 **VDJ (Video DJ)** — Mixagem de som + vídeo em tempo real

### Pacotes

- **Básico:** R$ 700+ (som + luz + DJ)
- **Intermediário:** R$ 1.500+ (som + luz + telão + videoclipes + VDJ)
- **Premium:** R$ 3.000+ (pacote completo + cerimonial + mestre de cerimônias)

### 4 Frentes de atendimento

1. **Casamentos** (noivos 25-40 anos)
2. **Formaturas** (jovens 18-25 anos)
3. **Outras Festas** (aniversários, bodas, chá de bebê)
4. **Eventos Corporativos** (empresas, confraternizações)

---

## Próximos passos

### Site

- [ ] Copiar logo para `web/public/logo.png`
- [ ] Instalar dependências: `cd web && npm install`
- [ ] Rodar em dev: `npm run dev`
- [ ] Criar componentes adicionais (Header, Footer, Pacotes, FAQ, etc.)
- [ ] Criar páginas adicionais (Casamentos, Formaturas, Sobre, Contato)
- [ ] Adicionar animações (ondas sonoras, bola de discoteca)
- [ ] Otimizar SEO (meta tags, schema.org)
- [ ] Testar responsividade
- [ ] Deploy no Vercel

### Instagram

- [ ] Escolher uma bio em `03-Instagram/bio-instagram.txt`
- [ ] Criar imagens para os posts da semana 1 (veja `posts/semana-1/`)
- [ ] Publicar conforme calendário em `posts/calendario.md`
- [ ] Configurar destaques (veja `bio-instagram.txt`)
- [ ] Responder mensagens com templates em `01-Empresa/mensagem-whatsapp.md`

### Google Meu Negócio

- [ ] Atualizar descrição (veja `content/seo-keywords.md`)
- [ ] Adicionar fotos de eventos e equipamentos
- [ ] Publicar posts semanais
- [ ] Responder avaliações

### Marketing

- [ ] Parcerias com espaços de eventos, fotógrafos, decoradores
- [ ] Criar vídeos mostrando videoclipes sincronizados
- [ ] Depoimentos em vídeo de clientes
- [ ] Anúncios segmentados (Facebook/Instagram Ads)

---

## Referências

- **Plano original:** `C:\Users\alvar\.cursor\plans\wm_som_e_luz_replicação_a433e502.plan.md`
- **Projeto base:** Paula Alvarenga Personal Cooker
- **Agent-skills Vercel:** https://github.com/vercel-labs/agent-skills

---

## Contato

Se tiver dúvidas sobre o projeto, consulte os documentos em:

- `01-Empresa/sobre-o-negocio.md` — Informações completas
- `content/site-copy.json` — Todo o conteúdo do site
- `web/README.md` — Instruções específicas do site
- `04-Artes/README-LOGO.md` — Informações sobre o logo

---

**Projeto criado em:** 11/02/2026  
**Baseado em:** Paula Alvarenga Personal Cooker  
**Objetivo:** Replicar processo completo de negócio digital para WM Som e Luz
