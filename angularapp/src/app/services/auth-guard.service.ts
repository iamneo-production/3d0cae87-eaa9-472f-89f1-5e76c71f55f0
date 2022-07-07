import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
   {   
    let authData = sessionStorage.getItem("auth");
    if(!authData || (authData === "false")){
       alert("Invalid access");
      this.route.navigate(['/login']);
       return false;
    }

   return true;
   }
}
