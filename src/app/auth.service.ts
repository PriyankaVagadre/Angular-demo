import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  loggedIn = false;

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) =>{
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    )
    return promise;
  }

  login(){
    this.loggedIn = true;
    console.log(this.loggedIn);

  }
  logOut(){
    this.loggedIn = false;
    console.log(this.loggedIn);
  }
}
