import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){

  }
 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean{
    if(localStorage.getItem('username')!=null){
      return true;
   }
   else{
     alert("you are not a authenticate user:plz visit on home page");
     this.router.navigate(['login']);
     return false;
   }

   }
}