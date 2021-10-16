import { LaboDto } from './labo.dto';
import { LaboService } from './labo.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
@Controller('labo')
export class LaboController {
  constructor(private laboService: LaboService) {}

  @Get()
  showAllLabo() {
    return this.laboService.showAll();
  }

  @Post()
  createLabo(@Body() data: LaboDto) {
    return this.laboService.create(data);
  }

  @Get(':id')
  readLabo(@Param('id') id: number) {
    return this.laboService.read(id);
  }

  @Put(':id')
  updateLabo(@Param('id') id: number, @Body() data) {
    return this.laboService.update(id, data);
  }

  @Delete(':id')
  deleteLabo(@Param('id') id: number) {
    return this.laboService.delete(id);
  }
}
