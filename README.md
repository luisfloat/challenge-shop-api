# minishop-nest

<a href="README.md"><img src="https://img.shields.io/badge/License-UNLICENSED-005c99?style=flat&amp;logo=" alt="License"/></a> <a href="README.md#documentation"><img src="https://img.shields.io/badge/Documentation-README.md-005c99?style=flat&amp;logo=" alt="Documentation"/></a>

## Description

It is a backend application with minimal shop REST API and database backup module.

### Technologies

<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/-Typescript-30363D?style=flat&amp;logo=typescript" alt="Typescript"/></a> <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-NodeJS-30363D?style=flat&amp;logo=node.js" alt="NodeJS"/></a> <a href="https://nestjs.com/"><img src="https://img.shields.io/badge/-NestJS-30363D?style=flat&amp;logo=nestjs" alt="NestJS"/></a> <a href="https://sequelize.org/"><img src="https://img.shields.io/badge/-Sequelize-30363D?style=flat&amp;logo=sequelize" alt="Sequelize"/></a> <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/-MySQL-30363D?style=flat&amp;logo=mysql" alt="MySQL"/></a> <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-30363D?style=flat&amp;logo=postgresql" alt="PostgreSQL"/></a> <a href="https://docker.com/"><img src="https://img.shields.io/badge/-Docker-30363D?style=flat&amp;logo=docker" alt="Docker"/></a> <a href="https://insomnia.rest/"><img src="https://img.shields.io/badge/-Insomnia-30363D?style=flat&amp;logo=insomnia" alt="Insomnia"/></a> <a href="https://dbeaver.io/"><img src="https://img.shields.io/badge/-DBeaver-30363D?style=flat&amp;logo=dbeaver" alt="DBeaver"/></a>

## Installation

```bash
git clone https://github.com/luisfloat/minishop-nest.git
npm install
docker compose up -d
npm run start
```

---

## Documentation

### Scripts

Name | Script | Description
-----|---------|-----------------
`build` | `npm run build` | Build app
`start` | `npm run start` | Start app
`start:dev` | `npm run start` | Start app in development mode
`start:prod` | `npm run start` | Start app in production mode

### Endpoint

#### **Categories**

Method   | Endpoint         | Description
---------|------------------|-------------------------
[GET] 	 | /categories 		| Find all *categories*
[GET] 	 | /categories/:id 	| Find one *category* by *id*
[POST] 	 | /categories 		| Create a *category*
[PATCH]  | /categories/:id 	| Update *category*
[DELETE] | /categories/:id	| Remove a *category* (it should *set null* to *product* *categoryId* on delete)

#### **Products**

Method   | Endpoint         | Description
---------|------------------|-------------------------
[GET] 	 | /products 		| Find all *products*
[GET] 	 | /products/:id    | Find one *product* by *id*
[POST] 	 | /products 		| Create a *product*
[PATCH]  | /products/:id    | Update a *product*
[DELETE] | /products/:id    | Remove a *product* (it should remove the *stock*)

- It should create a stock to respective product when it was created.
- Stock-Product has One-One Association.

#### **Stock**

Method   | Endpoint         | Description
---------|------------------|-------------------------
[GET] 	 | /products/:id/stock | Find the stock by associated *product* *id*.
[PATCH]  | /products/:id/stock | Update the stock by associated *product* *id*.
[DELETE] | /products/:id/stock | It should return status [501] - Not Implemented. (can't delete a stock)

### Backup

The backup is done automatically from MySQL to PostgreSQL every 10 seconds.
Don't forget to verify the *dotenv* PostgreSQL variables.

---

## Author

<a href="https://twitter.com/luisfloat"><img src="https://img.shields.io/badge/-Twitter-30363D?style=flat&amp;logo=twitter" alt="Twitter"/></a> <a href="https://github.com/luisfloat"><img src="https://img.shields.io/badge/-GitHub-30363D?style=flat&amp;logo=github" alt="GitHub"/></a> <a href="https://instagram.com/luisfloat"><img src="https://img.shields.io/badge/-Instagram-30363D?style=flat&amp;logo=instagram" alt="Instagram"/></a> <a href="mailto:contact@luisfloat.com"><img src="https://img.shields.io/badge/-Gmail-30363D?style=flat&amp;logo=gmail" alt="Gmail"/></a>