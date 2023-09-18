import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedpostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
