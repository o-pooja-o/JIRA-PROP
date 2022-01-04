import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Issue } from './issue.model';

export interface IssueState extends EntityState<Issue, number> {

}
export function createInitialState(): IssueState {
  return {
    createdAt: new Date(),
  };
}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'issues' })

export class IssueStore extends EntityStore<IssueState> {
  constructor() {
    super();
  }
}
