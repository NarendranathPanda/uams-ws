import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'UAMS';  
  constructor( private router: Router) { 
   if (sessionStorage.getItem('loggedTime') !== null) {
		router.navigateByUrl("/dashboard");}
    else{
		router.navigateByUrl("/login");}
  }
  
}
