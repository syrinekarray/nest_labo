import { UserService } from './../user/user.service';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginRequest, SignupRequest } from './auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginRequest: LoginRequest) {
    const { email, password } = loginRequest;
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException();
    }

    const isValid = await user.compare(password);

    if (!isValid) {
      throw new UnauthorizedException();
    }
    const payload = {
      email: user.email,
      role: user.role,
    };

    return { token: this.jwtService.sign(payload), user: user };
  }

  async signup(signupRequest: SignupRequest) {
    return await this.userService.createUser(signupRequest);
  }
}
