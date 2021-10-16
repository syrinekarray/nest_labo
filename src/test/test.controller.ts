import { TestDto } from './test.dto';
import { TestService } from './test.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}
  @Get()
  showAllTest() {
    return this.testService.showAll();
  }

  @Post()
  createTest(@Body() data: TestDto) {
    return this.testService.create(data);
  }

  @Get(':id')
  readTest(@Param('id') id: number) {
    return this.testService.read(id);
  }

  @Put(':id')
  updateTest(@Param('id') id: number) {
    return this.testService;
  }

  @Delete(':id')
  deleteTest(@Param('id') id: number) {
    return this.testService.delete(id);
  }
}
