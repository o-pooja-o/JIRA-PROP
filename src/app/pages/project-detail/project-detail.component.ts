import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/store/project/project.model';
import { ProjectQuery } from 'src/app/store/project/project.query';
import { ProjectService } from 'src/app/store/project/project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  type = 'Projects';
  feature = 'Project Details';
  isLoading = false;
  changesSaved = false;
  formSubscription!: Subscription;
  currentProject!: Project;

  projectDetailForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'url': new FormControl(''),
    'description': new FormControl(''),
    'category': new FormControl('')
  })

  constructor(
    private query: ProjectQuery,
    private projectDetailService: ProjectService) { }

  ngOnInit() {
    this.projectDetailService.loadProjectDetails();
    this.formSubscription = this.query.getProject$.subscribe((project: Project | undefined) => {
      if (project) {
        this.currentProject = project;
        this.projectDetailForm.setValue({
          name: project.name,
          url: project.url,
          description: project.description,
          category: project.category
        });
      }
    });
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

  onClick() {
    console.log('hii')
    this.isLoading = true;
    this.changesSaved = true;
    setTimeout(() => {
      this.projectDetailService.updateChanges({
        name: this.projectDetailForm.get('name')?.value,
        id: this.currentProject.id,
        description: this.projectDetailForm.get('description')?.value,
        url: this.projectDetailForm.get('url')?.value,
        category: this.projectDetailForm.get('category')?.value
      });
      this.isLoading = false;
      this.changesSaved = false;
    }, 1500);
    console.log('', this.projectDetailForm);
  }
}


