import { TestEntity } from 'src/test/test.entity';
import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TestEntity])],
  providers: [TestService],
  controllers: [TestController],
  exports: [TestService],
})
export class TestModule {}
