import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //import the httpclient
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-data-fetch',
  templateUrl: './http-data-fetch.component.html',
  styleUrls: ['./http-data-fetch.component.scss']
})
export class HttpDataFetchComponent implements OnInit {

  baseUrl ='assets/db.json';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  get_products(){
    this.httpClient.get(this.baseUrl).subscribe((res)=>{
      console.log(res);
    })
  }

}
