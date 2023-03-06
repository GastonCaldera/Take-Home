import { Module } from '@nestjs/common';
import { AppController } from './commit.controller';
import { AppService } from './commit.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class CommitModule {}
