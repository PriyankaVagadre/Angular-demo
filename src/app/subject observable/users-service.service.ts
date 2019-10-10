import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor() { }

  userActivated = new Subject();
}
