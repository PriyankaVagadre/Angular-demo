import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../../services/employee.service'; // import your service

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeelist = [];

  constructor( public employeedetails: EmployeeService) {}

  ngOnInit() {
    this.employeelist = this.employeedetails.getDataOFEmployees();
  }

}
