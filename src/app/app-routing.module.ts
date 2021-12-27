import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBoardComponent } from './pages/project-board/project-board.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

const routes: Routes = [
    // { path: '', component: ProjectDetailComponent },
    {
        path: 'project',
        component: ProjectBoardComponent,
    },
    { path: 'settings', component: ProjectDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
