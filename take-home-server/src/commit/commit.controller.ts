import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpException,
} from '@nestjs/common';
import { CommitService } from './commit.service';
import { CommitDto } from './dto/commit.dto';
import { Response } from 'src/entity/response';

@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}

  @Post()
  @HttpCode(200)
  async getCommit(@Body() commitDto: CommitDto): Promise<Response> {
    try {
      return await this.commitService.getCommit(commitDto);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          s: error.status,
          m: error?.response?.data?.message,
          d: '',
        },
        error.status,
      );
    }
  }
}
