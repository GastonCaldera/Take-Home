import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class CommitDto {
  @IsNotEmpty()
  @IsString()
  owner: string;
  @IsNotEmpty()
  @IsString()
  repo: string;
  @IsNotEmpty()
  @IsNumber()
  skip: number;
  @IsNotEmpty()
  @IsNumber()
  limit: number;
}
