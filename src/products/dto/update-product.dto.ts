import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    categoryId:	number;
    sku: string;
    name: string;
    description: string;
    price: number;
    status: number;
}
