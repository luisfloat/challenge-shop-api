import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ProductPg } from 'src/products_pg/product-pg.entity';
import { StockPg } from './stock-pg.entity';

@Injectable()
export class StocksPgService {
    constructor(
        @Inject('STOCKS_PG_REPOSITORY')
        private stocksPgRepository: typeof StockPg,
    ) {}

    async findOne(id: number) {
        const stockPg = await this.stocksPgRepository.findOne({ where: { productId: id, } });
        return this.getStockPgResponse(stockPg);
    }

    async update(id: number, updateStockPgDto: any) {
        const stockPg = await this.findOne(id);
        await this.stocksPgRepository.update(updateStockPgDto, { where: { productId: id } });
        return this.getStockPgResponse(stockPg);
    }

    async remove(id: number) {
        throw new HttpException('Can\'t delete a product stock.', HttpStatus.NOT_IMPLEMENTED);
    }

    getStockPgResponse(stockPg: StockPg): any {
        if(!stockPg) throw new HttpException('StockPg not found.', HttpStatus.NOT_FOUND);

        return stockPg;
    }

    async create(productPg: ProductPg) {
        return await this.stocksPgRepository.create(
            {
                productId: productPg.id,
                qty: 0,
                reserve: 0,
                status: productPg.status,
            }
        );
    }
}
