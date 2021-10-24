import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test')
export class TestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() price: number;
  @Column() name: string;

  @ManyToOne((type) => UserEntity, (user) => user.tests)
  user: UserEntity;
}
