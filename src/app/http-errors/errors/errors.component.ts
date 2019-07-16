import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../errors.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  public errorMessg;

  constructor(private myError : ErrorsService) { }

  ngOnInit() {
    this.errorMessg = this.myError;
  }

}
