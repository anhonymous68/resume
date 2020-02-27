import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity-component',
  templateUrl: './activity-component.component.html',
  styleUrls: ['./activity-component.component.css']
})
export class ActivityComponentComponent implements OnInit {
  @Input() activityName: string;
  @Input() activityLink: string;
  @Input() position: string;
  @Input() time: string;
  @Input() details: string[];


  constructor() {
    
  }

  ngOnInit() {
  }



}
