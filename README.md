# Site Fabiane Prem Ayurveda

Esboço do site (React + Vite) para apresentar à Fabiane. Todos os textos, telefone e endereço
ficam em **`src/data/site.js`**; todas as cores e fontes ficam no topo de **`src/styles.css`**.

## Rodar no computador

Precisa do Node.js instalado (versão 20 ou mais nova).

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## O que trocar primeiro

1. `src/data/site.js` — WhatsApp (`whatsapp`), e-mail, endereço, horários, Instagram, textos das terapias.
2. `src/styles.css` — bloco `:root` no topo (paleta e fontes).
3. Fotos — procure os comentários "Trocar por" em `Hero.jsx` e `About.jsx`. Coloque as imagens na pasta `public/`.

## Formulário que cai no e-mail dela

Usa o Web3Forms (gratuito, sem servidor próprio). Quando alguém envia o formulário, a Fabiane recebe um
e-mail com nome, e-mail, telefone, interesse e mensagem, e responde pelo próprio Gmail.

1. Entre em https://web3forms.com e informe o **e-mail da Fabiane**.
2. Eles enviam uma "Access Key" para esse e-mail.
3. Copie `.env.example` para `.env` e cole a chave em `VITE_WEB3FORMS_KEY=`.
4. Na hospedagem (Netlify/Vercel), cadastre a mesma variável `VITE_WEB3FORMS_KEY`.
5. Teste enviando uma mensagem pelo site e confira se o e-mail chegou (olhe também o spam).

Sem a chave, o formulário aparece normalmente, mas em "modo demonstração" (não envia nada).

## Botões de WhatsApp

`src/lib/whatsapp.js` monta o link `https://wa.me/NÚMERO?text=MENSAGEM`. As mensagens prontas estão em
`messages` dentro de `src/data/site.js` (geral, por terapia e por workshop). O cliente só precisa tocar em "enviar".

## Publicar

```bash
npm run build
```

A pasta `dist/` é o site pronto. Pode ser publicada de graça em Netlify, Vercel ou Cloudflare Pages
(conectando o repositório do GitHub, o build `npm run build` e a pasta `dist`).
