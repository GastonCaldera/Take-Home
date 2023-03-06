import { IsNotEmpty, IsString } from 'class-validator';
export class CommitDto {
  @IsNotEmpty()
  @IsString()
  owner: string;
  @IsNotEmpty()
  @IsString()
  repo: string;
}
