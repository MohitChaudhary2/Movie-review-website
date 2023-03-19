import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isMobile:boolean=false;
  userName="";
  password="";
  errMsg="";

  constructor(
    private deviceDetectorService:DeviceDetectorService, 
    private auth: AuthService,
    private router:Router
    ){}
  companyName: string = 'Roten Screens';
  companyDesc: string = `Roten Screens is an exciting movie review website that offers insightful, honest, and comprehensive reviews of the latest movies. We believe that movies are an art form that should be appreciated and celebrated.
  At Roten Screens, we cover a wide range of genres, including drama, comedy, action, horror, and romance. our website has got you covered.`
  
  ngOnInit(){
    this.isMobile=this.deviceDetectorService.isMobile();
    console.log(this.isMobile);
  }

  logIn(){
    if(this.userName.trim().length === 0){
      this.errMsg="Username is Required";
    }else if(this.password.trim().length === 0){
      this.errMsg="Password is required";
    }
    else{
      this.errMsg="";
      let res = this.auth.LogIn(this.userName,this.password);
      if(res === 200){
        this.router.navigate(['home']);
      }
      if(res === 403){
        this.errMsg = "Invalid Credentials";
      }
    }
  }
}
