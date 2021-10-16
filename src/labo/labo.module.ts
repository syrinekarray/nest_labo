import { LaboEntity } from 'src/labo/labo.entity';
import { Module } from '@nestjs/common';
import { LaboController } from './labo.controller';
import { LaboService } from './labo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LaboEntity])],
  controllers: [LaboController],
  providers: [LaboService],
})
export class LaboModule {}
