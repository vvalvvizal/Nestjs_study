export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus { //enumaration
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
