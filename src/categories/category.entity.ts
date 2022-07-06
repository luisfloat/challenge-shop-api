import { Table, Column, Model, DataType, HasMany, ForeignKey } from 'sequelize-typescript';

@Table
export class Category extends Model {
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    slug: string;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;
    
    @Column({ type: DataType.INTEGER, allowNull: false })
    status: number;
}
