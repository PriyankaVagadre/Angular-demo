import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.scss']
})
export class Parent3Component implements OnInit {

  public myname : string = "Angular Developer"

  constructor() { }

  ngOnInit() {
  }

}
