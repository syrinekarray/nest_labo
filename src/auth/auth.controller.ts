import { AuthService } from './auth.service';
import { LoginRequest, SignupRequest } from './auth.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginRequest: LoginRequest) {
    return await this.authService.login(loginRequest);
  }
  @Post('signup')
  async signup(@Body() sginupRequest: SignupRequest) {
    return await this.authService.signup(sginupRequest);
  }
}
