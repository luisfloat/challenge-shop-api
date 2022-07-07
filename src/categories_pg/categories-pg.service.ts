import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CategoryPg } from './category-pg.entity';
import { UpdateCategoryPgDto } from './dto/update-category-pg.dto';

@Injectable()
export class CategoriesPgService {
    constructor(
        @Inject('CATEGORIES_PG_REPOSITORY')
        private categoriesPgRepository: typeof CategoryPg
    ) {}
    
    async findAll(): Promise<CategoryPg[]> {
        return this.categoriesPgRepository.findAll<CategoryPg>();
    }

    async findOne(id: number): Promise<CategoryPg> {
        const categoryPg = await this.categoriesPgRepository.findByPk<CategoryPg>(id);
        
        if (!categoryPg) {
            throw new HttpException('CategoryPg not found.', HttpStatus.NOT_FOUND);
        }

        return categoryPg;
    }

    async create(createCategoryPgDto: any): Promise<CategoryPg> {
        return this.categoriesPgRepository.create(createCategoryPgDto);
    }

    async update(id: number, updateCategoryPgDto: UpdateCategoryPgDto): Promise<CategoryPg> {
        const categoryPg = await this.findOne(id);
        this.categoriesPgRepository.update(updateCategoryPgDto, { where: { id: id } });
        return categoryPg;
    }

    async remove(id: number): Promise<CategoryPg> {
        const categoryPg = await this.findOne(id);
        await this.categoriesPgRepository.destroy({ where: { id: id } });
        return categoryPg;
    }
}
