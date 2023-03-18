import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(){}
  companyName: string = 'Roten Screens';
  companyDesc: string = `Roten Screens is an exciting movie review website that offers insightful, honest, and comprehensive reviews of the latest movies. We believe that movies are an art form that should be appreciated and celebrated.
  At Roten Screens, we cover a wide range of genres, including drama, comedy, action, horror, and romance. our website has got you covered.`
  
}
