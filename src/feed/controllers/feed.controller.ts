import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedpostEntity } from '../models/post.entity';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}
  @Post('add')
  @UsePipes(ValidationPipe)
  async create(@Body() post: FeedpostEntity) {
    console.log(post);
    const response = await this.feedService.createPost(post);
    return response;
  }

  @Get()
  async getAllPosts(): Promise<any[]> {
    const response = await this.feedService.findAllPost();
    return response;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() feedPost: FeedpostEntity,
  ): Promise<any> {
    const response = await this.feedService.updatePost(id, feedPost);
    return response;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const response = await this.feedService.remove(id);
    return response;
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<any> {
    const response = await this.feedService.getOne(id);
    if (response === undefined) return response;
    else return 'no response';
  }
}
