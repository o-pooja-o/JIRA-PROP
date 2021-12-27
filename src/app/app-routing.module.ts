import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBoardComponent } from './pages/project-board/project-board.component';

const routes: Routes = [
  { path: '', component: ProjectBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
