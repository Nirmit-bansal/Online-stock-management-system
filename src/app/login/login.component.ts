import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  user={
    uname:'',
    pwd:''
  }
  msg;
  loginHere(myForm){
    this.user=myForm;
    console.log(this.user);
    let result=this.userService.checkUser(this.user);
    if(result==true)
    {
      this.router.navigate(['/dashboard']);
    }
    else{
      this.msg='Invalid username or password';
    }
  }

}
