# Challenge: Simple Shop Backend with Database Redundancy

This project is a backend application developed as a challenge to create a simple shop RESTful API with a database backup module.

## Features

- **API Endpoints**: Implements various RESTful endpoints for managing categories, products, and stock.
- **Backup**: Utilizes database backups for data redundancy, automatically backing up MySQL to PostgreSQL.

## Development Setup

### Prerequisites

* Node.js, NPM and Docker installed on your system.

### Installation

```bash
git clone https://github.com/luisfuturist/challenge-shop-nest.git
npm install
docker compose up -d
npm run start
```

### Scripts

Script | Description
---------|-----------------
`npm run build` | Builds the application for production.
`npm run start` | Starts the application in development mode.
`npm run start:dev` | Starts the application in development mode with live-reload.
`npm run star:prod` | Starts the application in production mode.
`npm run lint` | Runs code linting to identify potential errors and style issues.
`npm run up` | Runs database docker containers
`npm run down` | Stops database docker containers

---

## Technology Stack

- **Backend:**
  - **Node.js:** JavaScript runtime environment.
  - **NestJS:** A framework for building efficient, scalable server-side applications.
- **Database:**
  - **MySQL:** Open-source relational database management system.
  - **PostgreSQL:** Powerful, open-source object-relational database system.
  - **Sequelize:** Promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **Development Tools:**
  - **eslint:** Pluggable linting utility for JavaScript and TypeScript code.
  - **prettier:** Opinionated code formatter that automatically formats code according to predefined rules.
  - **TypeScript:** Typed superset of JavaScript that compiles to plain JavaScript.
  - **NestJS CLI:** Command-line interface tool for NestJS applications.
- **Containerization:**
  - **Docker:** Containerization platform used to manage MySQL and PostgreSQL databases, simplifying deployment and ensuring consistency across environments.

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

The application automatically backs up the MySQL database to PostgreSQL every 10 seconds. Ensure you have configured the necessary environment variables for the PostgreSQL connection in your `.env` file.
