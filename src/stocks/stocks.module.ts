import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { ProductsModule } from 'src/products/products.module';
import { stocksProviders } from './stocks.providers';

@Module({
    controllers: [StocksController],
    providers: [StocksService, ...stocksProviders],
    imports: [ProductsModule],
    exports: [StocksService]
})
export class StocksModule {}
