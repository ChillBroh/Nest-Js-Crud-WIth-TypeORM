import { Controller, Post, Body, Get } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}
  @Post('add')
  async create(@Body() post: FeedPost) {
    console.log(post);
    const response = await this.feedService.createPost(post);
    return response;
  }

  @Get()
  async getAllPosts(): Promise<FeedPost[]> {
    const response = this.feedService.findAllPost();
    return response;
  }
}
