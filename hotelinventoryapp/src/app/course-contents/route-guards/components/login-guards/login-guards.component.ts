import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-guards',
  templateUrl: './login-guards.component.html',
  styleUrls: ['./login-guards.component.scss']
})
export class LoginGuardsComponent {

  email!: string
  password!: string

  constructor(
    private route: Router,
    private loginService: LoginService
  ) { }

  login() {
    if(this.loginService.login(this.email, this.password)) {
      this.route.navigate(['/route-guards/dashboard'])
    }
  }

}
