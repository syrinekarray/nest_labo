import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { LaboModule } from './labo/labo.module';
import { TestModule } from './test/test.module';
import { ResultatModule } from './resultat/resultat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3307,
      database: 'labo',
      username: 'root',
      password: '',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    UserModule,
    AuthModule,
    SharedModule,
    LaboModule,
    TestModule,
    ResultatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
