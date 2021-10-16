import { UserEntity } from './../user/user.entity';
export class LaboDto {
  id: number;
  address: string;
  name: string;
  position: string;
  users?: UserEntity[];
}
