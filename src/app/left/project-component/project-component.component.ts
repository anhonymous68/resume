import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {
  @Input() projectName: string;
  @Input() projectLink: string;
  @Input() position: string;
  @Input() time: string;
  @Input() details: string[];


  constructor() {
    
  }

  ngOnInit() {
  }
}
