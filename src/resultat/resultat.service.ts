import { ResultatDto } from './resultat.dto';
import { ResultatEntity } from './resultat.entity';
import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestService } from 'src/test/test.service';
@Injectable()
export class ResultatService {
  constructor(
    @InjectRepository(ResultatEntity)
    private ResultatRepository: Repository<ResultatEntity>,
    private testService: TestService,
  ) {}

  async showAll() {
    return await this.ResultatRepository.find();
  }
  async create(@Body() createResultatDto: ResultatDto) {
    const resultat = await this.ResultatRepository.create(createResultatDto);
    resultat.test = await this.testService.read(createResultatDto.testId);
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
  async getTestsWithoutResult() {
    const idsList = await this.ResultatRepository.createQueryBuilder('result')
      .select('result.testId')
      .getRawMany();

    const idsArray = idsList.map((id) => {
      return id.testId;
    });

    return this.testService.getTestByArray(idsArray);
  }
}
