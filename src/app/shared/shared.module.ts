import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { AvatarGroupComponent } from './avatar-group/avatar-group.component';
import { IssueCardComponent } from './issue-card/issue-card.component';
@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [BreadCrumbComponent, AvatarGroupComponent, IssueCardComponent],
  exports: [BreadCrumbComponent, AvatarGroupComponent, IssueCardComponent]
})
export class SharedModule { }
