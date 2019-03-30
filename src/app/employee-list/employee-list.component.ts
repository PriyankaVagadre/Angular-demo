import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../employee.service'; // import your service

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees = []

  constructor( public employeeSer : EmployeeService ) { 
  }

  ngOnInit() {
    this.employees = this.employeeSer.getDataOFEmployees();
  }

}
