import { UserEntity } from './user.entity';
import { User } from './user.decorator';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/shared/roles.decorator';
import { RolesGuard } from 'src/shared/roles.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  @Roles('admin', 'user')
  @UseGuards(AuthGuard(), RolesGuard)
  showAllUsers(@User() user: UserEntity) {
    return this.userService.showAll();
  }

  @Get('profile')
  @UseGuards(AuthGuard())
  async getProfile(@User() user: UserEntity) {
    return await this.userService.findByEmail(user.email);
  }
}
