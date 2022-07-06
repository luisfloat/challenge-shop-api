import { Sequelize } from 'sequelize-typescript';

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

            await sequelize.sync();
            return sequelize;
        },
    },
];
