import { Injectable } from '@angular/core';
import { CanActivate, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component'

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate{
  constructor( private loginComponent:LoginComponent, private router:Router){

    console.log(this.loginComponent.isLoggedIn);
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return true;
      if(this.loginComponent.isLoggedIn == true){
        return true;
      }
      else{
        alert("You don't have rights to view this page");
        this.router.navigate(['login']);
      }
    }
}
