import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}

  getDataOFEmployees() {
    return  [
      {id: 1, name: 'Priyanka', lastname : 'Vagadre', gender: 'Female'},
      {id: 2, name: 'Shiven', lastname : 'Shukla', gender: 'Male'},
      {id: 3, name: 'Pooja', lastname : 'Tiwari', gender: 'Male'},
      {id: 4, name: 'Neha', lastname : 'Sing', gender: 'Male'},
      {id: 5, name: 'Raj', lastname : 'Kumar', gender: 'Male'}
    ];
  }
}
