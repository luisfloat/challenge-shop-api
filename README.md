# Minishop

It is a backend application with minimal shop REST API and database backup module.

### Technologies

* **Node.js** as JavaScript runtime environment;
* **TypeScript** as programming language;
* **NestJS** as back-end framework;
* **Sequelize** as ORM;
* **MySQL** as RDBMS for the main data;
* **PostgreSQL** as RDBMS for the backups;
* **Docker** for RDBMS containers.

## Installation

```bash
git clone https://github.com/luisfloat/minishop-api.git
npm install
docker compose up -d
npm run start
```

## Usage

Name | Script | Description
-----|---------|-----------------
`build` | `npm run build` | Build app
`start` | `npm run start` | Start app
`start:dev` | `npm run start:dev` | Start app in development mode
`start:prod` | `npm run star:prod` | Start app in production mode

---

## Documentation

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

<a href="https://twitter.com/luisfloat"><img src="https://img.shields.io/badge/-Twitter-333333?style=flat-square&amp;logo=twitter" alt="Twitter"/></a> <a href="https://github.com/luisfloat"><img src="https://img.shields.io/badge/-GitHub-333333?style=flat-square&amp;logo=github" alt="GitHub"/></a> <a href="https://instagram.com/luisfloat"><img src="https://img.shields.io/badge/-Instagram-333333?style=flat-square&amp;logo=instagram" alt="Instagram"/></a> <a href="mailto:contact@luisfloat.com"><img src="https://img.shields.io/badge/-Gmail-333333?style=flat-square&amp;logo=gmail" alt="Gmail"/></a>