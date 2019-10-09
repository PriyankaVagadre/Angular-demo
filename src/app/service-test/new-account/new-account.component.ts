import { Component, EventEmitter, Output } from '@angular/core';
import { LogServiceService } from '../service/log-service.service';
import { AccountServiceService } from '../service/account-service.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor (private logService : LogServiceService , private accountservice : AccountServiceService){
    this.accountservice.statusUpdated.subscribe(
      (status : string) => alert('new status ' + status)
    )
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.onAccountAdded(accountName, accountStatus)
    this.logService.logStatus(accountStatus)
  }
}
