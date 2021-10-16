import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'qsfjdqkhgoiqegsd1g45s7g65s4df6sfkajozeofjiphg',
    });
  }

  async validate(payload: any) {
    const { email } = payload;
    const user = await this.userRepo.findOne({ where: { email: email } });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
