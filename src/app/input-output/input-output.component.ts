import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events'; // import EventEmitter from @angular/core 

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  @Input() public parentData ;

  // @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('welcome message');
  }

}
