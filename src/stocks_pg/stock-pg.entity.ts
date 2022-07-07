import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ProductPg } from 'src/products_pg/product-pg.entity';

@Table
export class StockPg extends Model {
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => ProductPg)
    @Column({ type: DataType.INTEGER, unique: true, onDelete: 'CASCADE' })
    productId: number;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    qty: number;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    reserve: number;

    @Column({ type: DataType.INTEGER, defaultValue: 1 })
    status: number;

    @BelongsTo(() => ProductPg)
    product: ProductPg;
}
