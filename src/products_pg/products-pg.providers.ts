import { ProductPg } from './product-pg.entity';

export const productsPgProviders = [
    {
        provide: 'PRODUCTS_PG_REPOSITORY',
        useValue: ProductPg,
    },
];
