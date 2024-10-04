import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  //board
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
