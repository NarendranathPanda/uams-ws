import { Injectable } from '@angular/core';
import { LoginRequest } from './login' ;

@Injectable()
export class LoginService {

  doLogin(loginRequest:LoginRequest):boolean{
	  console.log(loginRequest.email);
	  sessionStorage.setItem('loggedTime', (Date.now()).toString());
	  return true;
  }
}
