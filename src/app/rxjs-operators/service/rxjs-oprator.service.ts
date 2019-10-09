import { Injectable } from '@angular/core';
import { RxjsObj } from '../model/object.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RxjsOpratorService {
  url = "../assets/object.json";

  constructor(public httpclient : HttpClient) {}

  getData() : Observable<RxjsObj>{
   return this.httpclient.get<RxjsObj>(this.url);
  }
}
