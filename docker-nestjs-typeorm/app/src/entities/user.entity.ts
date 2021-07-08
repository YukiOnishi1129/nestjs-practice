import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  email: string;
}
