import { Component } from '@angular/core';
import {EmployeeService} from './services/employee.service'; // import your service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], //register your service
  providers: [EmployeeService],
})
export class AppComponent {
  // title = 'my-app';
  public name = 'Priyanka';
  public sername = 'Vagadre';
  public message = 'hello';
}
