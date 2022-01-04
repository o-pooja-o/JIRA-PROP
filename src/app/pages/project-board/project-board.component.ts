import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit {
  type = 'Projects';
  name = 'Money Heist';
  feature = 'Kanban Board';
  constructor() { }

  ngOnInit() {
  }

}
