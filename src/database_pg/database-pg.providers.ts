import { Sequelize } from 'sequelize-typescript';
import { CategoryPg } from 'src/categories_pg/category-pg.entity';
import { ProductPg } from 'src/products_pg/product-pg.entity';
import { StockPg } from 'src/stocks_pg/stock-pg.entity';

export const databasePgProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.HOST_PG,
                port: parseInt(process.env.PORT_PG),
                username: process.env.USERNAME_PG,
                password: process.env.PASSWORD_PG,
                database: 'nest',
                logging: false,
            });
            sequelize.addModels([CategoryPg, ProductPg, StockPg]);
            await sequelize.sync();
            return sequelize;
        },
    },
];