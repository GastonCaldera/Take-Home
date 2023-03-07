import { Module } from '@nestjs/common';
import { CommitController } from './commit.controller';
import { CommitService } from './commit.service';

@Module({
  imports: [],
  controllers: [CommitController],
  providers: [CommitService],
})
export class CommitModule {}
