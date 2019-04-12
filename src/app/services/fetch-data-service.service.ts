import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeList} from './model/employee';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataServiceService {

  

  constructor(public httpclient: HttpClient) {
  }

    
}
