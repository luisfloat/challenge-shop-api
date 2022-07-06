import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/products/product.entity';
import { Stock } from './stock.entity';

@Injectable()
export class StocksService {
    constructor(
        @Inject('STOCKS_REPOSITORY')
        private stocksRepository: typeof Stock,
    ) {}

    async findOne(id: number) {
        const stock = await this.stocksRepository.findOne({ where: { productId: id, } });
        return this.getStockResponse(stock);
    }

    async update(id: number, updateStockDto: any) {
        const stock = await this.findOne(id);
        await this.stocksRepository.update(updateStockDto, { where: { productId: id } });
        return this.getStockResponse(stock);
    }

    async remove(id: number) {
        throw new HttpException('Can\'t delete a product stock.', HttpStatus.NOT_IMPLEMENTED);
    }

    getStockResponse(stock: Stock): any {
        if(!stock) throw new HttpException('Stock not found.', HttpStatus.NOT_FOUND);

        return stock;
    }

    async create(product: Product) {
        return await this.stocksRepository.create(
            {
                productId: product.id,
                qty: 0,
                reserve: 0,
                status: product.status,
            }
        );
    }
}
