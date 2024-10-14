import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  //board 생성을 위한 dto
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
