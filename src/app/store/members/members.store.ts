import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Member } from './member.model';

export interface MembersState extends EntityState<Member> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'members' })
export class MembersStore extends EntityStore<MembersState> {

  constructor() {
    super();
  }

}
