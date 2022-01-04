import { IssueService } from '../../store/issues/issue.service';
import { Component, OnInit } from '@angular/core';
import { Issue, StatusType } from '../../store/issues/issue.model';
import { IssueQuery } from '../../store/issues/issue.query';
import { Observable } from 'rxjs';
import { Member } from 'src/app/store/members/member.model';
import { MembersService } from 'src/app/store/members/members.service';
import { MembersQuery } from 'src/app/store/members/members.query';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit {
  type = 'Projects';
  name = 'Money Heist';
  feature = 'Kanban Board';
  list: string[] = ['BACKLOG', 'SELECTED FOR DEVELOPMENT', 'IN PROGRESS', 'DONE'];
  backlogIssues$!: Observable<Issue[]>;
  devIssues$!: Observable<Issue[]>;
  inProgressIssues$!: Observable<Issue[]>;
  doneIssues$!: Observable<Issue[]>;
  members$!: Observable<Member[]>;

  constructor(
    private issueService: IssueService,
    public issueQuery: IssueQuery,
    public membersService: MembersService,
    public membersQuery: MembersQuery,
  ) { }

  ngOnInit() {
    this.backlogIssues$ = this.issueQuery.getIssuesByStatus$(StatusType.BACKLOG);
    this.devIssues$ = this.issueQuery.getIssuesByStatus$(StatusType.SELECTED_FOR_DEVELOPMENT);
    this.inProgressIssues$ = this.issueQuery.getIssuesByStatus$(StatusType.IN_PROGRESS);
    this.doneIssues$ = this.issueQuery.getIssuesByStatus$(StatusType.DONE);

    this.issueService.loadIssues();

    this.membersService.loadMembers();
    this.members$ = this.membersQuery.selectAll();
  }

  getIssueByStatus(status: string): Observable<Issue[]> {
    let issues!: Observable<Issue[]>;
    switch (status) {
      case StatusType.BACKLOG:
        issues = this.backlogIssues$;
        break;
      case StatusType.SELECTED_FOR_DEVELOPMENT:
        issues = this.devIssues$;
        break;
      case StatusType.IN_PROGRESS:
        issues = this.inProgressIssues$;
        break;
      case StatusType.DONE:
        issues = this.doneIssues$;
        break;
      default:
        break;
    }
    return issues;
  }

  getMembers() {
    let members!: Observable<Member[]>;
    return this.members$;
  }
  drop(event: Event) {
    console.log(event);
  }
}


