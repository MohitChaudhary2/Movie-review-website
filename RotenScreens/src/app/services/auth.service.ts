import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  LogIn(userName:string, password:string){
    if(userName === "Mohit" && password === "1234"){
      return 200;
    }else{
      return 403;
    }
  }
  LogOut(){
    this.router.navigate(['login']);
  }
}
