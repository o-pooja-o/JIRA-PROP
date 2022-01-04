import { Member } from '../members/member.model'
export enum IssueType {
  TASK = 'TASK',
  STORY = 'STORY',
  BUG = 'BUG',
}
export enum PriorityType {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}
export enum StatusType {
  BACKLOG = 'BACKLOG',
  SELECTED_FOR_DEVELOPMENT = 'SELECTED FOR DEVELOPMENT',
  IN_PROGRESS = 'IN PROGRESS',
  DONE = 'DONE',
}
// export interface Member {
//   id: string | number;
//   img: string;
//   comments: Comment[];
//   issues: Issue[];
// }

export interface Comment {
  id: string | number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  author: Member;
}
export interface Issue {
  id: number;
  type: IssueType;
  title: string;
  description: string;
  status: StatusType;
  comments: Comment[];
  assignees: Member[];
  // assignees: string[];
  reporter: Member;
  // reporter: string;
  priority: PriorityType;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export function createIssue(params: Partial<Issue>) {
  return {

  } as Issue;
}
