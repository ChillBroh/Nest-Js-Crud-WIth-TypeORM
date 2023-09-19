import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { FeedPost } from './post.interface';

@Entity()
export class FeedpostEntity implements FeedPost {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({ default: '' })
  body: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
