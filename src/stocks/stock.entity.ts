import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/products/product.entity';

@Table
export class Stock extends Model {
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, unique: true, onDelete: 'CASCADE' })
    productId: number;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    qty: number;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    reserve: number;

    @Column({ type: DataType.INTEGER, defaultValue: 1 })
    status: number;

    @BelongsTo(() => Product)
    product: Product;
}
