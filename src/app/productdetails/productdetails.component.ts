import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  allUsers:Object;
  
  constructor(private registerService:RegisterService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers(){
    this.registerService.getUsers().subscribe((response)=>{
      this.allUsers=response;
    })
  }
}
