import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedpostEntity } from '../models/post.entity';
import { Repository } from 'typeorm';
import { FeedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedpostEntity)
    private readonly feedPostRepository: Repository<FeedpostEntity>,
  ) {}

  async createPost(feedPost: FeedPost): Promise<FeedPost> {
    const response = this.feedPostRepository.save(feedPost);
    return response;
  }

  async findAllPost(): Promise<FeedPost[]> {
    const response = await this.feedPostRepository.find();
    return response;
  }

  async updatePost(id: number, feedPost: FeedPost): Promise<any> {
    const response = this.feedPostRepository.update(id, feedPost);
    return response;
  }

  async remove(id: number): Promise<any> {
    const response = await this.feedPostRepository.delete(id);
    return response;
  }
}
