import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/api-calling/login.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-reg-login-page',
  templateUrl: './reg-login-page.component.html',
  styleUrls: ['./reg-login-page.component.css'],
})
export class RegLoginPageComponent implements OnInit {
  name = new FormControl('');
  password = new FormControl('');

  constructor(public router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    console.log(
      'checking if any user is detected: ',
      localStorage.getItem('user')
    );
  }

  LogInClicked(): void {
    console.log('Log In button is clicked');
    console.log(
      'Checking if we got the username and password correctly from the form'
    );

    console.log('user: ', this.name.value);
    console.log('password: ', this.password.value);

    console.log(
      'Sending the credentials to backend and see what they response with: '
    );

    this.loginService
      .loginUser({
        email: this.name.value,
        password: this.password.value,
      })
      .subscribe(
        (data) => {
          var founduser = this.getDecodedAccessToken(JSON.stringify(data));
          console.log('response: ', founduser);
          console.log('Setting the user in localstorage');

          localStorage.setItem('user', founduser.user.name);
          console.log('Navigating to home page');
          this.router.navigate(['home']);
        },
        (error) => {
          console.log('Bad Credential');
        }
      );
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
