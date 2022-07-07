import { Module } from '@nestjs/common';
import { StocksPgService } from './stocks-pg.service';
import { ProductsPgModule } from 'src/products_pg/products-pg.module';
import { stocksPgProviders } from './stocks-pg.providers';

@Module({
    providers: [StocksPgService, ...stocksPgProviders],
    imports: [ProductsPgModule],
    exports: [StocksPgService]
})
export class StocksPgModule {}
