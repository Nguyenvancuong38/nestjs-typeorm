import { IsEmail, IsNotEmpty, MaxLength, IsOptional, IsEnum } from "class-validator";
import { ROLE } from "src/users/enums";

export class RegisterDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @MaxLength(100, {
        message: 'userName is too long',
    })
    userName: string

    @IsOptional()
    code: string

    @IsEnum(ROLE)
    role: ROLE
}