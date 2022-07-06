import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { CategoriesService } from 'src/categories/categories.service';
import { categoriesProviders } from 'src/categories/categories.providers';

@Module({
    controllers: [ProductsController],
    providers: [
        ProductsService,
        ... productsProviders,
        CategoriesService,
        ...categoriesProviders,
    ],
    exports: [ProductsService],
})
export class ProductsModule {}
