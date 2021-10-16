import { ResultatDto } from './resultat.dto';
import { ResultatService } from './resultat.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
@Controller('resultat')
export class ResultatController {
  constructor(private resultatService: ResultatService) {}
  @Get()
  showAllResultat() {
    return this.resultatService.showAll();
  }
  @Post()
  createResultat(@Body() data: ResultatDto) {
    return this.resultatService.create(data);
  }

  @Get(':id')
  readResultat(@Param('id') id: number) {
    return this.resultatService.read(id);
  }
  @Get('test/:id')
  readResultatByTest(@Param('id') id: number) {
    return this.resultatService.readResultatByTest(id);
  }

  @Put(':id')
  updateResultat(@Param('id') id: number) {
    return this.resultatService;
  }

  @Delete(':id')
  deleteResultat(@Param('id') id: number) {
    return this.resultatService.delete(id);
  }
}
