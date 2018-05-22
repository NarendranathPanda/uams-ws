/* tslint:disable: member-ordering forin */
import { Component, OnInit } from '@angular/core';
import { LoginRequest } from './login' ;
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service' ;
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	isValidFormSubmitted = null;
	loginForm: FormGroup;
    loggedIn=false;
	loginRequest:LoginRequest = new LoginRequest();
	constructor(private loginService: LoginService,private router: Router) { }
    ngOnInit()    { 
	sessionStorage.removeItem('loggedTime');
	  this.loginForm = new FormGroup({
      'email': new FormControl('test@test.com', [
        Validators.required,
		Validators.email
      ]),
      'passwod': new FormControl('')
      
    });
	
	}
	get email(){return this.loginForm.get('email');}
	
	get passwod(){return this.loginForm.get('passwod');}
	
	 onFormSubmit() {
	
     this.isValidFormSubmitted = false;
     if (this.loginForm.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.loginRequest = this.loginForm.value;
     this.loggedIn = this.loginService.doLogin(this.loginRequest);
	 if(this.loggedIn= true){
     this.router.navigateByUrl("/dashboard");}
	 else{
	 this.router.navigateByUrl("/login");}
  }
}
