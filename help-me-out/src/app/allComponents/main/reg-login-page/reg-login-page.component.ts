import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reg-login-page',
  templateUrl: './reg-login-page.component.html',
  styleUrls: ['./reg-login-page.component.css']
})
export class RegLoginPageComponent implements OnInit {
  name = new FormControl('');
  password = new FormControl('')
 

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log('checking if any user is detected: ',localStorage.getItem('user'))
   
    
  }

  LogInClicked(): void{
    console.log("Log In button is clicked");
    console.log("Checking if we got the username and password correctly from the form");

    console.log('user: ',this.name.value);
    console.log('password: ',this.password.value);

    console.log("Setting the user in localstorage");

    localStorage.setItem('user', this.name.value)
    console.log("Navigating to home page");
    this.router.navigate(['home']);
  }

}
