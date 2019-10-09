import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../service-test/service/account-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public accountArray :{name : string , status : string}[] =[];

  constructor(private accountservice : AccountServiceService) { }

  ngOnInit() {
    this.accountArray = this.accountservice.accounts;
  }

  // onStatusChanged(){
  //   this.accountservice.onStatusChanged(name,status)
  // }
  // onAccountAdded(){
  //   this.accountservice.onAccountAdded(name,status)
  // }
}

