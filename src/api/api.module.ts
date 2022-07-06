import { Module } from '@nestjs/common';
import { CategoriesModule } from '../categories/categories.module';
import { ProductsModule } from '../products/products.module';
import { StocksModule } from '../stocks/stocks.module';

@Module({
    imports: [
        ProductsModule,
        CategoriesModule,
        StocksModule,
    ],
})
export class ApiModule {}
