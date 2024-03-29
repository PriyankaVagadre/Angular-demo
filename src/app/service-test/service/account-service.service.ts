import { Injectable , EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  //-----------service practise-----------
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  //-----------service practise-----------

  constructor() { }

  statusUpdated = new EventEmitter<string>();

  //-----------service practise-----------
  onAccountAdded( name: string, status: string ) {
    this.accounts.push({name:name, status: status});
  }
  onStatusChanged(id: number, newStatus: string ) {
    this.accounts[id].status = newStatus;
  }
  //-----------service practise-----------
}
