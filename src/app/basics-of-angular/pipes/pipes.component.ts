import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public name ='Priyanka';
  public message = 'hello folks';

  public person ={
    "name":"Ruhi",
    "lastname":"Shukla",
    "class": "Class 2019"
  }

  public number=.09;

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
