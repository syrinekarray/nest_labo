import { SharedModule } from './../shared/shared.module';
import { JwtStrategy } from './jwt.strategy';
import { UserEntity } from './../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    UserModule,
    SharedModule,
    JwtModule.register({
      secret: 'qsfjdqkhgoiqegsd1g45s7g65s4df6sfkajozeofjiphg',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
