import { Module } from '@nestjs/common';
import { CommitModule } from './commit/commit.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CommitModule],
})
export class AppModule {}
