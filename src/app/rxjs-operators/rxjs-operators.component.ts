import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RxjsOpratorService } from './service/rxjs-oprator.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor(public httpclient : HttpClientModule , public myservice : RxjsOpratorService ) { }

  ngOnInit() {
    //  this.myservice.getData().subscribe(x)
  }

}
