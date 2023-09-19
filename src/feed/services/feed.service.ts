import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedpostEntity } from '../models/post.entity';
import { Repository } from 'typeorm';
// import { FeedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedpostEntity)
    private readonly feedPostRepository: Repository<FeedpostEntity>,
  ) {}

  async createPost(feedPost: FeedpostEntity): Promise<FeedpostEntity> {
    try {
      const response = await this.feedPostRepository.save(feedPost);
      return response;
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('Email is already in use.');
      }
      throw err;
    }
  }

  async findAllPost(): Promise<any> {
    try {
      const response = await this.feedPostRepository.find();
      return response;
    } catch (err) {
      throw err;
    }
  }

  async updatePost(id: number, feedPost: FeedpostEntity): Promise<any> {
    try {
      const response = await this.feedPostRepository.update(id, feedPost);
      return response;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const response = await this.feedPostRepository.delete(id);
      return response;
    } catch (err) {
      throw err;
    }
  }

  async getOne(id: number): Promise<FeedpostEntity | undefined> {
    try {
      const response = await this.feedPostRepository.findOneBy({ id });
      return response;
    } catch (err) {
      throw err;
    }
  }
}
