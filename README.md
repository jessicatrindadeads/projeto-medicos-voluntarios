# Médicos & Dentistas pela Comunidade

[![CI](https://github.com/jessicatrindadeads/projeto-medicos-voluntarios/actions/workflows/ci.yml/badge.svg)](https://github.com/jessicatrindadeads/projeto-medicos-voluntarios/actions/workflows/ci.yml)

🔗 **Aplicação publicada:** [projeto-medicos-voluntarios.vercel.app](https://projeto-medicos-voluntarios.vercel.app)

Interface responsiva de uma iniciativa comunitária fictícia voltada ao atendimento médico e odontológico voluntário. O projeto apresenta informações institucionais, formas de contribuição e um formulário demonstrativo de inscrição de profissionais.

> Este é um projeto educacional. Os nomes, contatos, indicadores e registros exibidos são fictícios e não representam uma instituição em atividade.

## Funcionalidades

- Navegação entre páginas com React Router.
- Apresentação da missão e do impacto esperado da iniciativa.
- Página com diferentes formas de contribuição.
- Formulário de voluntariado com validação nativa e confirmação visual.
- Menu responsivo para dispositivos móveis.
- Layout adaptado para diferentes tamanhos de tela.

## Tecnologias

- React
- React Router DOM
- JavaScript
- Sass
- CSS Modules
- Vite
- ESLint

## Como executar

```bash
git clone https://github.com/jessicatrindadeads/projeto-medicos-voluntarios.git
cd projeto-medicos-voluntarios
npm install
npm run dev
```

Acesse o endereço informado pelo Vite no terminal, normalmente `http://localhost:5173`.

## Scripts disponíveis

```bash
npm run dev      # inicia o ambiente de desenvolvimento
npm run build    # gera a versão de produção
npm run lint     # verifica a qualidade do código
npm run preview  # visualiza localmente a versão de produção
```

## Estrutura principal

```text
src/
├── assets/
├── components/
│   ├── footer/
│   └── header/
├── pages/
│   ├── como-ajudar/
│   ├── home/
│   └── voluntario/
├── App.jsx
├── globalStyle.scss
└── main.jsx
```

## Aprendizados demonstrados

O projeto demonstra componentização em React, rotas no lado do cliente, estilização modular com Sass, construção de formulários acessíveis e desenvolvimento de interfaces responsivas.
