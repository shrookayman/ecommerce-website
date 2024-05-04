import { CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _AuthService :AuthService , private _Router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // if (this._AuthService.isAuthenticated()) {
    //   console.log('authh');
    //   return true; 
    // }
    // else {
    //   console.log(' not authh')
    //   this._Router.navigate(['login']); 
    //   return false; 
    // }

   if(this._AuthService.userData.getValue() != null ){
    return true;
   }
   else{
    this._Router.navigate(['login']);
    return false;
   }
  }
}
