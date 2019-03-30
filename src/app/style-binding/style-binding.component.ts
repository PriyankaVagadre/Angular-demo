import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  public mycolor ='red';


  public hasStyle ='false';

  public mystyle = {

    fontSize : '30px',
    color : 'blue'
  }

  constructor() { }

  ngOnInit() {
  }

}
