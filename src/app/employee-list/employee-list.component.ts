import { Component, OnInit } from '@angular/core';
import {FetchDataServiceService} from '../services/fetch-data-service.service'; // import your service

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees = [];

  constructor( public employeeSer: FetchDataServiceService ) {}

  ngOnInit() {
  //  this.employeeSer.getDataOFEmployees().subscribe(data => this.employees = data);
  }

}
