import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogServiceService } from '../service/log-service.service';
import { AccountServiceService } from '../service/account-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private logService : LogServiceService, private accountservice : AccountServiceService){}
  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accountservice.onStatusChanged(this.id, status)
    this.logService.logStatus(status)
    this.accountservice.statusUpdated.emit(status)
  }
}
