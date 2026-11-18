# Site Fabiane Prem Ayurveda

Site institucional de uma terapeuta de medicinas integrativas (Ayurveda, yoga, massagem e meditação), criado como projeto real para divulgar os atendimentos e workshops e facilitar o contato de novos clientes.

> **Status:** em desenvolvimento. A estrutura e os componentes estão prontos; paleta de cores, fotos, textos finais e endereço de atendimento ainda serão definidos com a cliente.

**Site publicado:** _em breve_ <!-- colocar o link aqui quando publicar -->

<!-- Para adicionar uma imagem de prévia: salve em docs/preview.png e descomente a linha abaixo.
![Prévia do site](docs/preview.png)
-->

## Sobre o projeto

A Fabiane atua com Yoga Massagem Ayurvédica (YMA), massagem de mesa, yoga, yoga do riso, meditação e workshops. O objetivo do site é:

- apresentar o trabalho dela e as terapias oferecidas;
- divulgar workshops e vivências;
- receber mensagens de interessados direto no e-mail dela;
- levar o cliente para o WhatsApp com a mensagem já pronta;
- servir de link no Instagram do negócio.

## Funcionalidades

- **Página única (one page)** com as seções: início, sobre, terapias, workshops, depoimentos, perguntas frequentes e contato.
- **Formulário de contato** que envia a mensagem para o e-mail da terapeuta, usando o [Web3Forms](https://web3forms.com), sem servidor próprio.
- **Botões de WhatsApp** com mensagem pronta (geral, por terapia e por workshop) e botão flutuante sempre visível.
- **Responsivo**, pensado primeiro para celular, com menu que abre e fecha.
- **Conteúdo separado do código:** textos, telefone, endereço e lista de terapias ficam em um único arquivo.
- **Visual trocável:** cores e fontes ficam em variáveis CSS no topo do arquivo de estilos.
- **Acessibilidade básica:** foco visível, textos alternativos, redução de animações para quem prefere.
- Campo escondido contra robôs (honeypot) no formulário.

## Tecnologias

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 7
- CSS puro (sem biblioteca de estilos)
- [Web3Forms](https://web3forms.com) para o envio de e-mails

## Estrutura

```
├── index.html
├── package.json
├── vite.config.js
├── .env.example            # modelo das variáveis de ambiente
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css          # paleta e fontes no bloco :root
    ├── data/
    │   └── site.js         # textos, contatos, terapias, workshops
    ├── lib/
    │   └── whatsapp.js     # monta o link do WhatsApp com mensagem pronta
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Workshops.jsx
        ├── Testimonials.jsx
        ├── Faq.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── WhatsAppFloat.jsx
        ├── Mandala.jsx
        ├── Icons.jsx
        └── SectionTitle.jsx
```

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou mais recente.

```bash
# instalar as dependências
npm install

# criar o arquivo de variáveis de ambiente
cp .env.example .env

# rodar em modo de desenvolvimento
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Outros comandos:

```bash
npm run build     # gera a pasta dist/ com o site pronto
npm run preview   # abre uma prévia local do build
```

## Configuração

### Formulário de contato

1. Crie uma conta em [web3forms.com](https://web3forms.com) informando o e-mail que vai receber as mensagens.
2. Copie a chave de acesso (Access Key) enviada por e-mail.
3. Coloque a chave no arquivo `.env`:

```
VITE_WEB3FORMS_KEY=sua-chave-aqui
```

Sem a chave, o formulário funciona em modo demonstração (não envia nada). O arquivo `.env` não vai para o repositório.

### Dados do site

Todo o conteúdo editável está em `src/data/site.js`: nome, WhatsApp, e-mail, endereço, horários, Instagram, mensagens prontas, terapias, workshops, depoimentos e perguntas frequentes.

> O número do WhatsApp deve estar no formato internacional, só com dígitos (DDI + DDD + número).

### Cores e fontes

Altere as variáveis no bloco `:root` no início de `src/styles.css`.

### Fotos

Coloque as imagens na pasta `public/` e substitua os espaços reservados em `Hero.jsx` e `About.jsx`.

## Publicação

O site é estático, então pode ser hospedado gratuitamente. A opção escolhida é o **Cloudflare Pages**:

1. Rodar `npm run build`.
2. Enviar a pasta `dist/` (ou conectar este repositório).
3. Cadastrar a variável `VITE_WEB3FORMS_KEY` nas configurações do projeto na hospedagem.
4. Atualizar o endereço do site no painel do Web3Forms.

## Próximos passos

- [ ] Definir paleta de cores e aplicar identidade visual
- [ ] Adicionar fotos reais (terapeuta, espaço, atendimentos)
- [ ] Revisar os textos com a cliente
- [ ] Definir o endereço de atendimento e o mapa
- [ ] Incluir depoimentos reais
- [ ] Confirmar a lista completa de terapias
- [ ] Publicar e colocar o link no Instagram
- [ ] Registrar um domínio próprio (opcional)

## Autor

Desenvolvido por **[seu nome]** <!-- colocar nome e link do seu GitHub/LinkedIn -->, como projeto para a terapeuta Fabiane Prem.
