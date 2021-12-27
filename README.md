## comandos

```bash

# Instalando Nestjs de forma global
$ npm install -g @nestjs/cli

# Criando projeto
$ nest new nest-graphql-prisma

# Entre no projeto
$ cd nest-graphql-prisma

# Instale os pacotes
$ npm install @nestjs/graphql graphql apollo-server-express

# Gerando resources com generator do Nest
$ nest g resource donations

# Instale ts-morph
$ npm install ts-morph

# Este comando gera o arquivo graphql.ts com script inicial
$ npm run gen-typings

# Instale
$ npm install --legacy-peer-deps graphql-iso-date
$ npm install graphql-iso-date

# Iniciando prisma
$ npx prisma init

# Criando Migrate
# A flag --name refere que o próximo nome será o migrate criada. Nesse modelo foi dado o nome de init
$ npx prisma migrate dev --name init

# Seeds inseri no banco dados iniciais
$ npx prisma db seed

# Generator do prisma
$ npx prisma generate

# Instale
$ npm install -D concurrently

# Playgound Apollo Server
$ localhost:3000/graphql

```
