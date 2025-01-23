import { BoardsController } from 'src/boards/boards.controller';
import { Board } from '../boards/board.entity';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: String;

  @Column()
  password: String;

  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
