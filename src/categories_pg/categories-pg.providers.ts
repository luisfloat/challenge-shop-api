import { CategoryPg } from './category-pg.entity';

export const categoriesPgProviders = [
    {
        provide: 'CATEGORIES_PG_REPOSITORY',
        useValue: CategoryPg,
    },
];
