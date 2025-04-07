# API Hospitalar

Este é um projeto de estudo e prática que implementa uma API para gerenciamento de dados hospitalares utilizando Prisma, TypeScript e PostgreSQL.

## 🚀 Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - TypeScript
  - Express
  - Prisma ORM
  - PostgreSQL
  - JWT para autenticação
  - Zod para validação de dados
  - tsyringe para injeção de dependência

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- PostgreSQL
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/jessdebrito/api-database-hospital.git
cd api-database-hospital
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações de banco de dados.

4. Execute as migrações do banco de dados:
```bash
npm run migrate
```

## 🏃‍♂️ Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento:
```bash
npm run dev
```

## 📚 Documentação da API

A documentação da API está disponível em `/api-docs` quando o servidor estiver rodando.

## 🛠️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento
- `npm run migrate`: Executa as migrações do banco de dados

## 📝 Estrutura do Projeto

```
├── src/              # Código fonte
├── prisma/          # Configurações e migrações do Prisma
├── package.json     # Dependências e scripts
└── tsconfig.json    # Configurações do TypeScript
```

## 🤝 Contribuindo

Este é um projeto de estudo e prática. Sinta-se à vontade para contribuir com melhorias ou sugestões.