import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  color = '' ;
  mygreen = 'green';

  myblue = {
    color :'blue',
    fontSize : '20px'

  }

  constructor() { }

  ngOnInit() {
  }

}
