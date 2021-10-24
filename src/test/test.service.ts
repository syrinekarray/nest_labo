import { TestDto } from './test.dto';
import { TestEntity } from './test.entity';
import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestEntity)
    private TestRepository: Repository<TestEntity>,
  ) {}

  async showAll() {
    return await this.TestRepository.find();
  }
  async create(@Body() createTestDto: TestDto) {
    const test = await this.TestRepository.create(createTestDto);
    return await this.TestRepository.save(test);
  }
  async read(id: number) {
    return await this.TestRepository.findOne({ where: { id } });
  }
  async update(id: number, data) {
    console.log(data);
    return await this.TestRepository.update({ id }, data);
  }
  async delete(id: number) {
    return await this.TestRepository.delete({ id });
  }

  async getTestByUserId(id: number) {
    return await this.TestRepository.find({ where: { user: id } });
  }
  async getTestByArray(ids: number[]) {
    return await this.TestRepository.find({ where: { id: Not(ids) } });
  }
}
