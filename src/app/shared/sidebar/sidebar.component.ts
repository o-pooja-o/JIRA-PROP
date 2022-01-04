import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  iconClass: string;
  displayText: string;
  link?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isShow = true;
  enabledMenus: MenuItem[] = [
    { iconClass: 'fas fa-columns', displayText: 'Kanban Board', link: '/project' },
    { iconClass: 'fas fa-cog', displayText: 'Project Settings', link: 'settings' },
  ];
  disabledMenus: MenuItem[] = [
    { iconClass: 'fas fa-columns', displayText: 'Releases' },
    { iconClass: 'far fa-check-square', displayText: 'Issues and filters' },
    { iconClass: 'far fa-file-alt', displayText: 'Pages' },
    { iconClass: 'fas fa-chart-line', displayText: 'Reports' },
    { iconClass: 'far fa-calendar', displayText: 'Components' }
  ];

  constructor() { }

  ngOnInit() { }
}

