import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('labo')
export class LaboEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  address: string;
  @Column()
  name: string;
  @Column()
  position: string;
  @OneToMany(() => UserEntity, (user) => user.labo)
  users: UserEntity[];
}
