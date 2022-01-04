import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { timer } from 'rxjs';
import { Member } from './member.model';
import { MembersStore } from './members.store';
import { members } from './memberTestData'

@Injectable({ providedIn: 'root' })
export class MembersService {

  constructor(private membersStore: MembersStore) {
  }


  loadMembers() {
    this.membersStore.setLoading(true);

    const apiResponse = timer(1000);
    apiResponse.subscribe(_ => {
      this.membersStore.set(members);
      this.membersStore.setLoading(false);
      console.log('member store updated')
    })
  }

  add(member: Member) {
    this.membersStore.add(member);
  }

  update(id: number, member: Partial<Member>) {
    this.membersStore.update(id, member);
  }

  remove(id: ID) {
    this.membersStore.remove(id);
  }

}
