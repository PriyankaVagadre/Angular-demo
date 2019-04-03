import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User} from './user';
import { JwtReponse} from './jwt-reponse';
import { from } from 'rxjs';
import { Observable , BehaviorSubject} from 'rxjs';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER = 'http://localhost:4200'; // authentication server
  authSubject = new BehaviorSubject(false); // new object of behaviorsubject

  constructor(private httpClient: HttpClient) { }

  register(){

  }
  login(){

  }
  logout(){

  }
  isAuthenticate(){

  }
}
