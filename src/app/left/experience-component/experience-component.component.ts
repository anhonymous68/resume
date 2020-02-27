import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.css']
})
export class experienceComponentComponent implements OnInit {
  @Input() companyName: string;
  @Input() companyLink: string;
  @Input() position: string;
  @Input() time: string;
  @Input() details: string[];


  constructor() {
    
  }

  ngOnInit() {
  }



}
