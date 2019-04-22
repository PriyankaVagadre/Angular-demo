import { Component, OnInit } from '@angular/core';
import {FetchDataServiceService} from '../../services/fetch-data-service.service'; // import your service
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees = [];

  constructor( public employeeSer: EmployeeService ) {}

  ngOnInit() {
  //  this.employeeSer.getDataOFEmployees().subscribe(data => this.employees = data);
  this.employees = this.employeeSer.getDataOFEmployees();
  }

}
