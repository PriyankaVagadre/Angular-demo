import { Injectable } from '@angular/core';
import { RxjsObj } from '../model/object.model';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RxjsOpratorService {
  myrxjsObj : RxjsObj[];
  url = "assets\object.json";

  constructor(public httpclient : HttpClientModule) {}

  // getData(){
  //   this.httpclient.get(this.url)
  // }
}
