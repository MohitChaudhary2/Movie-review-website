import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  LogIn(userName:string, password:string){
    if(userName === "Mohit" && password === "1234"){
      return 200;
    }else{
      return 403;
    }
  }
}
