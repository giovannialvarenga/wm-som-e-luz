# Publicar no GitHub e na Vercel

## Estado atual

- **GitHub:** repositório criado e código enviado  
  **https://github.com/giovannialvarenga/wm-som-e-luz**

- **Vercel:** deploy feito a partir da pasta `web`. O projeto ficou ligado ao projeto existente "web" na tua conta.  
  **URL de produção:** https://web-e9f33shm5-giovanni-alvarengas-projects.vercel.app

---

## Opcional: projeto Vercel só para WM Som e Luz

Para ter um URL tipo `wm-som-e-luz.vercel.app` e poder usar o domínio `wmsomeluz.com.br`:

1. Em [vercel.com](https://vercel.com) → **Add New** → **Project**.
2. **Import** do repositório **wm-som-e-luz** (giovannialvarenga/wm-som-e-luz).
3. Em **Root Directory** escolhe **web**.
4. **Deploy**. A Vercel cria um projeto novo com um URL dedicado.
5. Em **Project → Settings → Domains** podes adicionar `wmsomeluz.com.br`.

---

## Comandos úteis

```powershell
# Enviar alterações para o GitHub
cd "c:\Users\alvar\OneDrive\Desktop\WM Som e Luz"
git add -A
git commit -m "mensagem"
git push

# Deploy manual na Vercel (a partir da pasta web)
cd "c:\Users\alvar\OneDrive\Desktop\WM Som e Luz\web"
npx vercel --prod
```
