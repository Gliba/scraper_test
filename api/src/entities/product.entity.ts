import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column({ type: 'float' })
  price: number;
  @Column({ type: 'mediumtext' })
  description: string;
  @Column({ type: 'mediumtext' })
  image: string;
  @Column()
  created_on: Date;
}
