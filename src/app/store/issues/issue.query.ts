import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Issue } from './issue.model';
import { IssueStore, IssueState } from './issue.store';

@Injectable({ providedIn: 'root' })
export class IssueQuery extends QueryEntity<IssueState> {

  getIssuesByStatus$ = (statusToFilter: string): Observable<Issue[]> => this.selectAll({
    filterBy: ({ status }) => status === statusToFilter
  });

  constructor(protected store: IssueStore) {
    super(store);
  }

}
