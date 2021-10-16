import { ResultatEntity } from './resultat.entity';
import { Module } from '@nestjs/common';
import { ResultatService } from './resultat.service';
import { ResultatController } from './resultat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ResultatEntity])],
  providers: [ResultatService],
  controllers: [ResultatController],
})
export class ResultatModule {}
