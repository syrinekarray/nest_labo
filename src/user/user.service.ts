import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignupRequest } from 'src/auth/auth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUser(signupRequest: SignupRequest) {
    const user = this.userRepository.create(signupRequest);
    return await this.userRepository.save(user);
  }

  async showAll() {
    return await this.userRepository.find();
  }
}
