import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  message: any;


  constructor(public router : Router) { }

  // errorHandler(error :HttpErrorResponse){
  //   return Observable.throw(error.message || "Internal Server Error");
  // }

  errorHandler(errorResponse : HttpErrorResponse ){
    if(errorResponse.error instanceof ErrorEvent){
       console.log("client Side Error" , errorResponse.error.message);
    }
    else{
      console.log("Server Side Error", errorResponse);
       if(errorResponse.status == 404){
            //  console.log("404 Page not found");
            errorResponse.status;
       }
       else if(errorResponse.status == 401){
             console.log("401 Unauthrized")

       }
       else if(errorResponse.status == 408){
         console.log("408 Request time out")
       }
       else if(errorResponse.status == 500){
         console.log("Internal server error")
       }
       else{
         console.log("unknown error");
       }
    }
    return this.message = throwError(errorResponse.message)

 }
}
