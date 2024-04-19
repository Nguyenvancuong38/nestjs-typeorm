import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { ROLE } from "../enums";

export class CreateUserDto {
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
