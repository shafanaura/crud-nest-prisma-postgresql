import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsEmail()
  email: string;

  @ApiProperty({ enum: ['TEACHER', 'STUDENT'] })
  @IsEnum(['TEACHER', 'STUDENT'], { message: 'Invalid role' })
  role: 'TEACHER' | 'STUDENT';
}
