import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../shared/Skill.Service'

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers : [SkillService]
})
export class RightComponent implements OnInit {

  languages = [];
  tools = [];
  penTestings = []

  constructor(private skillService : SkillService) { 
    this.languages = skillService.ProgrammingLanguage;
    this.tools = skillService.Tool;
    this.penTestings = skillService.PenTesting;
  }

  ngOnInit() {
  }

  
  

}
