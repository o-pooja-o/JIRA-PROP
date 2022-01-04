import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { Issue } from './issue.model';
import { IssueStore } from './issue.store';
import { issues } from './issueTestData';

@Injectable({ providedIn: 'root' })
export class IssueService {

  constructor(private issueStore: IssueStore) {
  }


  // get() {
  //   return this.http.get<Issue[]>('https://api.com').pipe(tap(entities => {
  //     this.issueStore.set(entities);
  //   }));
  // }
  // getIssues(): Observable<Issue[]> {
  //   this.loadIssues();
  //   return timer(200).pipe(mapTo(issues));
  // }

  loadIssues(): void {
    this.issueStore.setLoading(true);
    // Call the http API
    const apiResponse = timer(1000);
    apiResponse.subscribe(_ => {
      this.issueStore.set(issues);
      this.issueStore.setLoading(false);
      console.log('issue store updated');
    });
  }
  add(issue: Issue) {
    this.issueStore.add(issue);
  }

  update(id: number, issue: Partial<Issue>) {
    this.issueStore.update(id, issue);
    console.log('updated', issues)
  }

  // remove(id: ID) {
  //   this.issueStore.remove(id);
  // }

}
