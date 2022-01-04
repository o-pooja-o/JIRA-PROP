import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { ProjectStore } from './project.store';
import { projectDetails } from './testData';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  constructor(private projectStore: ProjectStore) {
  }

  loadProjectDetails() {
    this.projectStore.set(projectDetails);

    // return this.http.get<Project[]>('https://api.com').pipe(tap(entities => {
    //   this.projectStore.set(entities);
    // }));

  }
  updateChanges(projectInfo: Project) {
    this.projectStore.update(projectInfo);
  }

  // add(project: Project) {
  //   this.projectStore.add(project);
  // }

  // update(id: any, project: Partial<Project>) {
  //   this.projectStore.update(id, project);
  // }

  // remove(id: ID) {
  //   this.projectStore.remove(id);
  // }

}
