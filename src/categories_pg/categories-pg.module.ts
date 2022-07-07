import { Module } from '@nestjs/common';
import { CategoriesPgService } from './categories-pg.service';
import { categoriesPgProviders } from './categories-pg.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [
        CategoriesPgService,
        ...categoriesPgProviders,
    ],
    exports: [CategoriesPgService]
})
export class CategoriesPgModule {}
