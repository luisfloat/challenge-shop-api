import { Sequelize } from 'sequelize-typescript';
import { Category } from 'src/categories/category.entity';
import { Product } from 'src/products/product.entity';
import { Stock } from 'src/stocks/stock.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: process.env.HOST,
                port: parseInt(process.env.PORT),
                username: process.env.USERNAME,
                password: process.env.PASSWORD,
                database: 'nest',
                logging: false,
            });

            sequelize.addModels([Category, Product, Stock]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
