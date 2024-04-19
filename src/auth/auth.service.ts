import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/auth-signin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService 
    ){}

    async signIn(signInDto: SignInDto) {
        const user = await this.userService.findByEmail(signInDto.email);
        if (user.data.password !== signInDto.password) {
            throw new UnauthorizedException("Account Invalid");
        }
        const payload = { 
            email: user.data.email, 
            username: user.data.username,
            role: user.data.role
        };

        return {
        access_token: await this.jwtService.signAsync(payload),
        };
    }
}
