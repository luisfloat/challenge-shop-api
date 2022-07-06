import { Stock } from './stock.entity';

export const stocksProviders = [
    {
        provide: 'STOCKS_REPOSITORY',
        useValue: Stock,
    },
];