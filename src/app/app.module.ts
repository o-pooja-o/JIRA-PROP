import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectBoardModule } from './pages/project-board/project-board.module';
import { ProjectDetailModule } from './pages/project-detail/project-detail.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectDetailModule,
    ProjectBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {



}

