import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {
  alert:boolean=false;
  userid: number;
  userObj: Object;
  constructor(private route:ActivatedRoute,private registerService:RegisterService,private router:Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userid=id;
   // console.log(this.userid);
    this.getUser(this.userid);
  }
  getUser(userid){
    this.registerService.getUser(userid).subscribe((response)=>{
    this.userObj=response;
    //console.log(response); 
    })
  }
  updateUser(userForm){
    this.registerService.updateUser(this.userObj).subscribe((response)=>{
      this.alert=true;
      userForm.reset();
      //this.router.navigate(["/productlist"]);
    })
  }
  closeAlert()
{
  this.alert=false;
  this.router.navigate(["/productlist"]);
}
}
