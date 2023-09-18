import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';
import { FeedpostEntity } from './models/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedpostEntity])],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
