import { ResultatDto } from './resultat.dto';
import { ResultatEntity } from './resultat.entity';
import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class ResultatService {
  constructor(
    @InjectRepository(ResultatEntity)
    private ResultatRepository: Repository<ResultatEntity>,
  ) {}
  async showAll() {
    return await this.ResultatRepository.find();
  }
  async create(@Body() createResultatDto: ResultatDto) {
    const resultat = await this.ResultatRepository.create(createResultatDto);
    return await this.ResultatRepository.save(resultat);
  }
  async read(id: number) {
    return await this.ResultatRepository.findOne({ where: { id } });
  }
  async update(id: number, data) {
    console.log(data);
    return await this.ResultatRepository.update({ id }, data);
  }
  async delete(id: number) {
    return await this.ResultatRepository.delete({ id });
  }

  async readResultatByTest(id: number) {
    return await this.ResultatRepository.findOne({ where: { test: id } });
  }
}
