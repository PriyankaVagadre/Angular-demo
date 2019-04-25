import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DepartmentService} from '../../services/department.service'
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public departmentList =[];

  constructor(private localservicevar : DepartmentService , public route : Router) { }

  ngOnInit() {

    this.localservicevar.getDepartment().subscribe(data => this.departmentList = data)
  }

  selectDepartment(myVariable){
       this.route.navigate(['/department-list', myVariable.id])
  }

}
