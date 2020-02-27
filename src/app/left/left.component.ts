import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/shared/Epxerience.Service';
import { ProjectService } from 'src/shared/Projects.Service';
import { ActivityService } from 'src/shared/Activity.Service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  providers : [ExperienceService, ProjectService, ActivityService]
})
export class LeftComponent implements OnInit {
  experiences = [];
  projects = [];
  activities = []

  constructor(private experienceService : ExperienceService, projectService : ProjectService, activityService : ActivityService) { 
    this.experiences = experienceService.Experiences;
    this.projects = projectService.Projects;
    this.activities = activityService.Activities;
    console.log(this.projects);
  }

  ngOnInit() {
  }

}
