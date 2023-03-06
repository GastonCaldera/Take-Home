import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CommitDto } from './dto/commit.dto';

@Controller('commit')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getCommit(@Body() commitDto: CommitDto): Promise<string> {
    return await this.appService.getCommit(commitDto);
  }
}
