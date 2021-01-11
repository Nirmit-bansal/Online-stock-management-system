import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  alert:boolean=false;
  allUsers:Object;
  isEdit=false;
  userObj={
      pid: '',
      pname: '',
      price: '',
      pqnty:'',
      pcateg: '',
      pbrand: '',
      pavail: '',
      id:'' 
  }
 
  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit() {
  this.getAllUsers();
}
doRegister(user){
          //console.log(this.registerService.createUser(user));
         this.registerService.createUser(user).subscribe((response)=>{
          console.log("Inserted value");
          
         // this.getAllUsers();
         this.alert=true;
         
         })
         
}
getAllUsers(){
  this.registerService.getUsers().subscribe((response)=>{
    this.allUsers=response;
  })
}
closeAlert()
{
  this.alert=false;
  this.router.navigate(["/productlist"]);
}
}
