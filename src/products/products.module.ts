import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { CategoriesService } from 'src/categories/categories.service';
import { categoriesProviders } from 'src/categories/categories.providers';
import { StocksService } from 'src/stocks/stocks.service';
import { stocksProviders } from 'src/stocks/stocks.providers';

@Module({
    controllers: [ProductsController],
    providers: [
        ProductsService,
        ... productsProviders,
        StocksService, ...stocksProviders,
        CategoriesService, ...categoriesProviders
    ],
    exports: [ProductsService],
})
export class ProductsModule {}
