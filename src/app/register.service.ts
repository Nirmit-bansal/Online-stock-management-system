import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http:HttpClient) { }
  createUser(user){
    return this._http.post("http://localhost:3000/users",user);
    //return "hello";
  }
  getUsers(){
    return this._http.get("http://localhost:3000/users");
  }
  deleteUser(user){
    return this._http.delete("http://localhost:3000/users/"+user.id);
    //return "delete";
  }
  getUser(id){
    return this._http.get("http://localhost:3000/users/"+id);
  }
  updateUser(user){
    return this._http.put("http://localhost:3000/users/" +user.id,user);
  }
}
