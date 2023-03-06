import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './commit.service';
import { CommitDto } from './dto/commit.dto';
import { Response } from 'src/entity/response';

@Controller('commit')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getCommit(@Body() commitDto: CommitDto): Promise<Response> {
    return await this.appService.getCommit(commitDto);
  }
}
