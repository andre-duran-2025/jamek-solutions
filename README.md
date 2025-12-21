# JAMEK Solutions Showcase

Aplicação web desenvolvida com React, TypeScript, Tailwind CSS e Shadcn UI para apresentar as soluções de automação industrial da JAMEK Solutions.

## 🚀 Tecnologias

- **Frontend:** React, Vite, TypeScript
- **Estilização:** Tailwind CSS
- **Componentes:** Shadcn UI (Radix UI)
- **Roteamento:** React Router DOM
- **Backend (Serverless):** Vercel Functions (Node.js)
- **E-mail:** Resend API

## 🛠️ Como rodar localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Resend:
   ```env
   RESEND_API_KEY=sua_chave_aqui
   ```

3. **Inicie o servidor de desenvolvimento (Frontend):**
   ```bash
   npm run dev
   ```
   Acesse: `http://localhost:8080`

4. **Inicie o servidor Backend (opcional para teste local do e-mail):**
   Em outro terminal:
   ```bash
   node server.js
   ```
   *Nota: O projeto está configurado para redirecionar chamadas `/api` para o backend local durante o desenvolvimento.*

## 📦 Deploy na Vercel

Este projeto está pronto para deploy na Vercel.

1. Faça o push do código para o GitHub.
2. Importe o projeto no painel da Vercel.
3. Nas configurações do projeto na Vercel, adicione a variável de ambiente:
   - **Nome:** `RESEND_API_KEY`
   - **Valor:** `sua_chave_do_resend`
4. O Vercel detectará automaticamente a pasta `api/` e configurará as Serverless Functions.
5. O build command padrão (`vite build`) funciona corretamente.

## 📁 Estrutura de Pastas Relevante

- `src/`: Código fonte do frontend
- `api/`: Serverless Functions para deploy na Vercel
- `public/`: Arquivos estáticos (logo, favicon)
- `server.js`: Servidor local para desenvolvimento (backend)
