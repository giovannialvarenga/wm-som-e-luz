# Publicar no GitHub e na Vercel

## 1. GitHub

### Criar o repositório
1. Abre [github.com/new](https://github.com/new).
2. Nome sugerido: `wm-som-e-luz` (ou `WM-Som-e-Luz`).
3. Escolhe **Private** ou **Public**.
4. **Não** marques "Add a README" (o projeto já tem conteúdo).
5. Clica em **Create repository**.

### Enviar o código
No terminal, na pasta do projeto (`WM Som e Luz`), corre:

```powershell
cd "c:\Users\alvar\OneDrive\Desktop\WM Som e Luz"

# Adicionar o remote (substitui TEU_USERNAME pelo teu utilizador GitHub)
git remote add origin https://github.com/TEU_USERNAME/wm-som-e-luz.git

# Enviar o branch master
git push -u origin master
```

Se o repositório já tiver um remote, usa:

```powershell
git remote set-url origin https://github.com/TEU_USERNAME/wm-som-e-luz.git
git push -u origin master
```

---

## 2. Vercel

### Ligar o repositório
1. Entra em [vercel.com](https://vercel.com) e faz login (pode ser com conta GitHub).
2. Clica **Add New** → **Project**.
3. **Import** do repositório `wm-som-e-luz` (se não aparecer, liga primeiro a conta GitHub em Settings).
4. **Importante:** em **Root Directory** escolhe **web** (a app Next.js está na pasta `web`).
5. **Framework Preset** deve aparecer como Next.js.
6. Clica **Deploy**.

A Vercel gera um URL do tipo `wm-som-e-luz-xxx.vercel.app`. Depois podes configurar um domínio próprio (ex.: `wmsomeluz.com.br`) em **Project → Settings → Domains**.

### Deploys seguintes
Cada `git push` ao branch que escolheste (ex.: `master`) faz um novo deploy na Vercel automaticamente.
