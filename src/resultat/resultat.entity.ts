import { TestEntity } from './../test/test.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('resultat')
export class ResultatEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  res: string;
  @Column()
  description: string;

  @OneToOne(() => TestEntity)
  @JoinColumn()
  test: TestEntity;
}
