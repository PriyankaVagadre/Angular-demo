import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../employee.service'; // import your service

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeelist = [];

  constructor( public employeedetails : EmployeeService) { 
  }

  ngOnInit() {
    this.employeelist = this.employeedetails.getDataOFEmployees();
  }

}
