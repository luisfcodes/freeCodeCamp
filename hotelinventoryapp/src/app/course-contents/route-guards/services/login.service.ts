import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  constructor() { }

  login(email: string, password: string): boolean {
    if(email === 'admin@gmail.com' && password === 'Admin') {
      return this.isLoggedIn = true;
    } else {
      return this.isLoggedIn = false;
    }
  }
}
