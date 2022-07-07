import { Module } from '@nestjs/common';
import { categoriesPgProviders } from 'src/categories_pg/categories-pg.providers';
import { CategoriesPgService } from 'src/categories_pg/categories-pg.service';
import { stocksPgProviders } from 'src/stocks_pg/stocks-pg.providers';
import { StocksPgService } from 'src/stocks_pg/stocks-pg.service';
import { productsPgProviders } from './products-pg.providers';
import { ProductsPgService } from './products-pg.service';

@Module({
    providers: [
        ProductsPgService,
        ... productsPgProviders,
        StocksPgService,
        ...stocksPgProviders,
        CategoriesPgService,
        ...categoriesPgProviders
    ],
    exports: [ProductsPgService],
})
export class ProductsPgModule {}
