import { LaboDto } from './labo.dto';
import { LaboEntity } from './labo.entity';
import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LaboService {
  constructor(
    @InjectRepository(LaboEntity)
    private laboRepository: Repository<LaboEntity>,
  ) {}
  async showAll() {
    return await this.laboRepository.find();
  }

  async create(@Body() createLaboDto: LaboDto) {
    const labo = await this.laboRepository.create(createLaboDto);
    return await this.laboRepository.save(labo);
  }
  async read(id: number) {
    return await this.laboRepository.findOne({ where: { id } });
  }

  async update(id: number, data) {
    console.log(data);

    return await this.laboRepository.update({ id }, data);
  }
  async delete(id: number) {
    return await this.laboRepository.delete({ id });
  }
}
