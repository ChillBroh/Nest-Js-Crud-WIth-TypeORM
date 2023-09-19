import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { FeedPost } from './post.interface';

@Entity()
@Unique(['email'])
export class FeedpostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({ default: '' })
  body: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @Column()
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
