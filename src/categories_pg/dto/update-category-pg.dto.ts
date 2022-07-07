import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryPgDto } from './create-category-pg.dto';

export class UpdateCategoryPgDto extends PartialType(CreateCategoryPgDto) {
    slug: string;
    title: string;
    status: number;
}
