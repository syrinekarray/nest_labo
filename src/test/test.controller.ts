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
  @Get('user/:id')
  readTestByUserId(@Param('id') id: number) {
    return this.testService.getTestByUserId(id);
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
    return 'nothing ' + id;
  }

  @Delete(':id')
  deleteTest(@Param('id') id: number) {
    return this.testService.delete(id);
  }
}
