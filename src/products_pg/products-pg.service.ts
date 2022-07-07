import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ProductPg } from './product-pg.entity';
import { UpdateProductPgDto } from './dto/update-product-pg.dto';
import { StocksPgService } from 'src/stocks_pg/stocks-pg.service';
import { CategoriesPgService } from 'src/categories_pg/categories-pg.service';

@Injectable()
export class ProductsPgService {
    constructor(
        @Inject('PRODUCTS_PG_REPOSITORY')
        private productsPgRepository: typeof ProductPg,
        private stockPgService: StocksPgService,
        private categoriesPgService: CategoriesPgService,
    ) {}
    
    async findAll(): Promise<ProductPg[]> {
        return this.productsPgRepository.findAll<ProductPg>();
    }

    async findOne(id: number): Promise<ProductPg> {
        const productPg = await this.productsPgRepository.findByPk<ProductPg>(id);

        if (!productPg) {
            throw new HttpException('Product not found.', HttpStatus.NOT_FOUND);
        }

        return productPg;
    }

    async create(createProductDto: any): Promise<ProductPg> {
        await this.categoriesPgService.findOne(createProductDto.categoryId);

        const productPg = await this.productsPgRepository.create(createProductDto);
        this.stockPgService.create(productPg);

        return productPg;
    }

    async update(id: number, updateProductPgDto: UpdateProductPgDto): Promise<ProductPg> {
        await this.categoriesPgService.findOne(updateProductPgDto.categoryId);
        const productPg = await this.findOne(id);
        await this.productsPgRepository.update(updateProductPgDto, { where: { id: id } });
        return productPg;
    }

    async remove(id: number): Promise<ProductPg> {
        const productPg = await this.findOne(id);
        await this.productsPgRepository.destroy({ where: { id: id } });
        return productPg;
    }
}
