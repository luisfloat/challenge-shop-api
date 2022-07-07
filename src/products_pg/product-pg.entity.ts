import { Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { CategoryPg } from 'src/categories_pg/category-pg.entity';
import { StockPg } from 'src/stocks_pg/stock-pg.entity';

@Table
export class ProductPg extends Model {
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number;
    
    @ForeignKey(() => CategoryPg)
    @Column({ type: DataType.INTEGER, onDelete: "SET NULL" })
    categoryId:	number;
    
    @Column({ type: DataType.STRING, allowNull: false })
    sku: string;
    
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;
    
    @Column({ type: DataType.TEXT, allowNull: false })
    description: string;
    
    @Column({ type: DataType.FLOAT, allowNull: false })
    price: number;
    
    @Column({ type: DataType.INTEGER, allowNull: false })
    status: number;

    @HasOne(() => StockPg, 'productId')
    stock: StockPg;
}
