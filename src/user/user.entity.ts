import { TestEntity } from './../test/test.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import { LaboEntity } from 'src/labo/labo.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;

  @Column({ default: 'user' })
  role: string;

  @ManyToOne((type) => LaboEntity, (labo) => labo.users)
  labo: LaboEntity;
  @OneToMany((type) => TestEntity, (test) => test.user)
  tests: TestEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async compare(passwordText: string) {
    return await bcrypt.compare(passwordText, this.password);
  }
}
