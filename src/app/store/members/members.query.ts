import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Member } from './member.model';
import { MembersStore, MembersState } from './members.store';

@Injectable({ providedIn: 'root' })
export class MembersQuery extends QueryEntity<MembersState> {
  getMembers$: Observable<Member[]> = this.selectAll();
  constructor(protected store: MembersStore) {
    super(store);
  }
}
