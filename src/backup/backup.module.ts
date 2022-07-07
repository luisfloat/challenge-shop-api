import { Module } from '@nestjs/common';
import { categoriesProviders } from 'src/categories/categories.providers';
import { CategoriesService } from 'src/categories/categories.service';
import { categoriesPgProviders } from 'src/categories_pg/categories-pg.providers';
import { CategoriesPgService } from 'src/categories_pg/categories-pg.service';
import { productsProviders } from 'src/products/products.providers';
import { ProductsService } from 'src/products/products.service';
import { productsPgProviders } from 'src/products_pg/products-pg.providers';
import { ProductsPgService } from 'src/products_pg/products-pg.service';
import { stocksProviders } from 'src/stocks/stocks.providers';
import { StocksService } from 'src/stocks/stocks.service';
import { stocksPgProviders } from 'src/stocks_pg/stocks-pg.providers';
import { StocksPgService } from 'src/stocks_pg/stocks-pg.service';
import { BackupService } from './backup.service';
import { databasePgProviders } from 'src/database_pg/database-pg.providers';

@Module({
    providers: [
        BackupService,
        ... databasePgProviders,
        ProductsService,
        ... productsProviders,
        StocksService,
        ...stocksProviders,
        CategoriesService,
        ...categoriesProviders,
        ProductsPgService,
        ... productsPgProviders,
        StocksPgService,
        ...stocksPgProviders,
        CategoriesPgService,
        ...categoriesPgProviders,
    ],
})
export class BackupModule {}
