import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrmDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  type: string;
}