import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
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
  getAllUsers(){
    this.registerService.getUsers().subscribe((response)=>{
      this.allUsers=response;
    })
  }
  deleteMe(user){
    //console.log(this.registerService.deleteMe(user));
    this.registerService.deleteUser(user).subscribe((response)=>{
      this.getAllUsers();
      //console.log("delete");
    })
  }
  editUser(user){
    //this.isEdit=true;
    //this.userObj=user;
    //console.log(this.userObj);
    this.router.navigate(["/updateproduct",user.id]);
  }
}
