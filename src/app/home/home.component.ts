import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../service-test/service/account-service.service';
import { AuthService } from '../auth.service';

import 'rxjs/Rx'
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public accountArray: { name: string, status: string }[] = [];

  constructor(private accountservice: AccountServiceService, public authservice: AuthService) { }

  ngOnInit() {
    this.accountArray = this.accountservice.accounts;


    //------------observable------------------
    // const myNumber = Observable.interval(100000);
    // myNumber.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // )
    //------------observable------------------
  }

  // onStatusChanged(){
  //   this.accountservice.onStatusChanged(name,status)
  // }
  // onAccountAdded(){
  //   this.accountservice.onAccountAdded(name,status)
  // }


  //-----Auth Gaurd Service
  onLogin() {
    this.authservice.login();
  }
  onLogout() {
    this.authservice.logOut();
  }
  //-----Auth Gaurd Service

}

