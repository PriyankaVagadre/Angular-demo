import { Injectable } from '@angular/core';
import { DepartmentList}  from '../department/department'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable , of, throwError } from 'rxjs';
import 'rxjs';

import { ErrorsService } from '../http-errors/errors.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public url : string= "../assets/department.js-on";

  constructor(private httpClient : HttpClient , private errorService: ErrorsService) { }

  getDepartment() : Observable<DepartmentList[]>{

    return this.httpClient.get<DepartmentList[]>(this.url)
                          .pipe(catchError(this.errorService.errorHandler))
  }


}
