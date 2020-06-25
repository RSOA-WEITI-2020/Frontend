export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN PROGRESS',
  DONE = 'DONE',
  ERROR = 'ERROR',
}
export interface Task {
  id: number;
  user_id: number;
  start_time: Date;
  end_time: Date;
  code: string;
  status: TaskStatus;
  response: any;
  cost: number;
  shots: number;
  schema: string;
}
