# Guia Rápido — Primeiros Passos

Siga estas etapas para começar a usar o projeto WM Som e Luz.

---

## 1. Copiar o logo ⭐ IMPORTANTE

Execute este comando no PowerShell (na pasta do projeto):

```powershell
$source = "C:\Users\alvar\.cursor\projects\c-Users-alvar-OneDrive-Desktop-Paula-Alvarenga-Personal-Cooker\assets\c__Users_alvar_AppData_Roaming_Cursor_User_workspaceStorage_2e49464b9b42f2bd25b8ff1f2fda0b85_images_ChatGPT_Image_11_de_fev._de_2026__23_35_53-a39ec73c-f147-4ca9-b3eb-e83fbdecccdd.png"
Copy-Item $source "04-Artes\logo-wm-som-luz.png"
Copy-Item $source "web\public\logo.png"
```

---

## 2. Instalar dependências do site

```bash
cd web
npm install
```

---

## 3. Rodar o site

```bash
npm run dev
```

Abra `http://localhost:3000` no navegador.

---

## 4. Configurar Git (opcional)

Se quiser fazer commit:

```bash
git config user.name "Seu Nome"
git config user.email "seu@email.com"
git commit -m "Inicializar projeto WM Som e Luz"
```

---

## 5. Próximos passos

- [ ] Testar a home page
- [ ] Criar mais páginas (Casamentos, Formaturas, etc.)
- [ ] Criar imagens para posts do Instagram
- [ ] Publicar primeiro post no Instagram
- [ ] Atualizar Google Meu Negócio

---

## Arquivos importantes

- `README.md` — Documentação completa
- `RESUMO-EXECUCAO.md` — Resumo do que foi feito
- `01-Empresa/sobre-o-negocio.md` — Informações da empresa
- `content/site-copy.json` — Todo o conteúdo do site
- `03-Instagram/posts/calendario.md` — Calendário de posts
- `web/README.md` — Instruções do site

---

## Contato

- **WhatsApp:** (15) 99116-3093
- **Instagram:** @wmsomeluz
- **Domínio:** wmsomeluz.com.br
