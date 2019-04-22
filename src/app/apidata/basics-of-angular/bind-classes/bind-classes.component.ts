import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-classes',
  templateUrl: './bind-classes.component.html',
  styleUrls: ['./bind-classes.component.scss']
})
export class BindClassesComponent implements OnInit { 


  //property defines like 

  public dengerclass = 'danger-text';
  
  public hasError = true ;

  public applyClassces ={
  
    'danger-text' : !this.hasError,
    'special-text' : this.hasError,
    'success-text' : this.hasError

  }

  constructor() { }

  ngOnInit() {
  }

}
