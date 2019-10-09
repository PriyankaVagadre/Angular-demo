import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanActivateChild{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private authService : AuthService, public router : Router){}
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
     .then(
       (authenticated : boolean) =>{
         if(authenticated){
           return true;
         }
         else{
           this.router.navigate(['/home']);
         }
       }
     )
  }
  canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state)
  }
}
