import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isLoggedIn():boolean{
    //on the basis of logic, i will return true or false
    return false;
  }

  checkUser(user):boolean{
    if(user.uname=="nirmit" && user.pwd=="bansal"){
      localStorage.setItem('username','nirmit');
      return true;
    }
    else{
      return false;
    }
  }
   
  logout(){
    localStorage.clear();
  }

}
