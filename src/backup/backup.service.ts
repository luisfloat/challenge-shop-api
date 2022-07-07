import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { Category } from 'src/categories/category.entity';
import { CategoryPg } from 'src/categories_pg/category-pg.entity';
import { Product } from 'src/products/product.entity';
import { ProductPg } from 'src/products_pg/product-pg.entity';
import { Stock } from 'src/stocks/stock.entity';
import { StockPg } from 'src/stocks_pg/stock-pg.entity';

@Injectable()
export class BackupService {
    private readonly logger = new Logger(BackupService.name);

    constructor(
        @Inject('CATEGORIES_REPOSITORY')
        private categoriesRepository: typeof Category,
        @Inject('CATEGORIES_PG_REPOSITORY')
        private categoriesPgRepository: typeof CategoryPg,

        @Inject('PRODUCTS_REPOSITORY')
        private productsRepository: typeof Product,
        @Inject('PRODUCTS_PG_REPOSITORY')
        private productsPgRepository: typeof ProductPg,

        @Inject('STOCKS_REPOSITORY')
        private stocksRepository: typeof Stock,
        @Inject('STOCKS_PG_REPOSITORY')
        private stocksPgRepository: typeof StockPg,
    ) {}
    

    @Cron(CronExpression.EVERY_10_SECONDS)
    async handleBackups(): Promise<any> {
        this.logger.debug('Handling backups...');
        
        this.handleCategoriesBackup();
        this.handleProductsBackup();
        this.handleStocksBackup();
    }

    async handleCategoriesBackup() {
        let data = await this.categoriesRepository.findAll();

        for (var i = 0; i < data.length; i++) {
            let category: any = data[i];
            let item = {
                createdAt: category.createdAt,
                updatedAt: category.updatedAt,
                id: category.id,

                slug: category.slug,
                title: category.title,
                status: category.status,
            };
            let where = { where: { id: category.id } };
            
            await this.updateOrCreate(this.categoriesPgRepository, where, item);
        }
    }

    async handleProductsBackup() {
        let data = await this.productsRepository.findAll();

        for (var i = 0; i < data.length; i++) {
            let product: any = data[i];
            let item = {
                createdAt: product.createdAt,
                updatedAt: product.updatedAt,
                id: product.id,

                categoryId: product.categoryId,
                sku: product.sku,
                name: product.name,
                description: product.description,
                price: product.price,
                status: product.status,
            };
            let where = { where: { id: product.id } };
            
            await this.updateOrCreate(this.productsPgRepository, where, item);
        }
    }

    async handleStocksBackup() {
        let data = await this.stocksRepository.findAll();

        for (var i = 0; i < data.length; i++) {
            let stock: any = data[i];
            let item = {
                createdAt: stock.createdAt,
                updatedAt: stock.updatedAt,
                id: stock.id,

                productId: stock.productId,
                qty: stock.qty,
                reserve: stock.reserve,
                status: stock.status,
            };
            let where = { where: { id: stock.id } };
            
            await this.updateOrCreate(this.stocksPgRepository, where, item);
        }
    }

    async updateOrCreate(repo: any, where: any, newItem: any) {
        const foundItem = await repo.findOne(where);
        
        if (!foundItem) {
            try {
                const item = await repo.create(newItem);
                return { item, created: true };
            } catch (err) { console.log(err); }
        }

        try {
            const item = await repo.update(newItem, where);
            return { item, created: false };
        } catch (err) {
            console.log(err);
        }
    }
}
