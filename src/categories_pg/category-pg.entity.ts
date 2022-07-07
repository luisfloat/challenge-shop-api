import { Table, Column, Model, DataType, HasMany, ForeignKey } from 'sequelize-typescript';
import { ProductPg } from 'src/products_pg/product-pg.entity';

@Table
export class CategoryPg extends Model {
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    slug: string;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;
    
    @Column({ type: DataType.INTEGER, allowNull: false })
    status: number;

    @HasMany(() => ProductPg)
    products: ProductPg[];
}
