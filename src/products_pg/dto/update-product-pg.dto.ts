import { PartialType } from '@nestjs/mapped-types';
import { CreateProductPgDto } from './create-product-pg.dto';

export class UpdateProductPgDto extends PartialType(CreateProductPgDto) {
    categoryId:	number;
    sku: string;
    name: string;
    description: string;
    price: number;
    status: number;
}
