import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departmentList =[
    { id: 1, name: "angular"},
    { id: 2, name: "react"},
    { id: 3, name: "html"},
    { id: 4, name: "css"}
  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  selectDepartment(myVariable){
       this.route.navigate(['/department-list', myVariable.id])
  }

}
