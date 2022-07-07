import { StockPg } from './stock-pg.entity';

export const stocksPgProviders = [
    {
        provide: 'STOCKS_PG_REPOSITORY',
        useValue: StockPg,
    },
];