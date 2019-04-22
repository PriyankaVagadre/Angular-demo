import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DepartmentService} from '../../department.service'
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public departmentList =[];

  constructor(private localservicevar : DepartmentService) { }

  ngOnInit() {

    this.localservicevar.getDepartment().subscribe(data => this.departmentList = data)
  }

  // selectDepartment(myVariable){
  //      this.route.navigate(['/department-list', myVariable.id])
  // }

}
