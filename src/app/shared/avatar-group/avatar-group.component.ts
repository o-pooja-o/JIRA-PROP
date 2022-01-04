import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/store/members/member.model';

@Component({
  selector: 'app-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrls: ['./avatar-group.component.scss']
})
export class AvatarGroupComponent implements OnInit {
  @Input()
  size?: string;
  @Input()
  members?: Member[];
  images: string[] = ['berlin', 'denver', 'tokyo', 'professor'];

  constructor() { }

  ngOnInit() {
  }


}
