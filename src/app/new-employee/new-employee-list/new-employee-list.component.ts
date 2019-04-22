import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../new-service.service';

@Component({
  selector: 'app-new-employee-list',
  templateUrl: './new-employee-list.component.html',
  styleUrls: ['./new-employee-list.component.scss']
})
export class NewEmployeeListComponent implements OnInit {

  public localNewEmployeeList = [];

  constructor(private newEmployeeService : NewServiceService) { }

  ngOnInit() {
    // this.localNewEmployeeList = this.newEmployeeService.getDataOFNewEmployees(); //old method

    this.newEmployeeService.getDataOFNewEmployees()
    .subscribe(data => this.localNewEmployeeList = data);
  }

}
