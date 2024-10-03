export interface Board {
  //db 사용하면 필요없음
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus { //enumaration
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
