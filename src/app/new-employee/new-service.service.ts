import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NewEmployees} from './new-employee';
// import { Observable} from 'rxjs/observable'; // was showing an error of obervable is not exported member of obervable
import { Observable, of } from 'rxjs'
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  
  // public _url : string = '../new-employee/new-employee.json'; // path is not defined
  public _url : string = '../../assets/new-employee.json';

  constructor( public httpClient : HttpClient) { }

  getDataOFNewEmployees() : Observable<NewEmployees[]> {
    // return  [
    //   {id: 1, name: 'Priyanka', lastname : 'Vagadre', gender: 'Female'},
    //   {id: 2, name: 'Shiven', lastname : 'Shukla', gender: 'Male'},
    //   {id: 3, name: 'Pooja', lastname : 'Tiwari', gender: 'Female'},
    //   {id: 4, name: 'Neha', lastname : 'Sing', gender: 'Female'},
    //   {id: 5, name: 'Raj', lastname : 'Kumar', gender: 'Male'}
    // ]; 

    // this.httpClient.get<NewEmployees[]>(this._url); //old method

    return this.httpClient.get<NewEmployees[]>(this._url);
  }
}
