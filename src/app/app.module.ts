import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { experienceComponentComponent } from './left/experience-component/experience-component.component';
import { ProjectComponentComponent } from './left/project-component/project-component.component';
import { ActivityComponentComponent } from './left/activity-component/activity-component.component';
import { EducationComponentComponent } from './left/education-component/education-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LeftComponent,
    RightComponent,
    experienceComponentComponent,
    ProjectComponentComponent,
    ActivityComponentComponent,
    EducationComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
