import { Injectable } from '@angular/core';
import { DepartmentList}  from '../app/department/department'
import { HttpClient } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public url : string= "../assets/department.json";

  constructor(private httpClient : HttpClient) { }
  
  getDepartment() : Observable<DepartmentList[]>{
    
    return this.httpClient.get<DepartmentList[]>(this.url);

  }

}
