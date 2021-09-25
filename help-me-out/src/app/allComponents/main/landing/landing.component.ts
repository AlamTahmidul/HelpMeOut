import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
user:any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
  }

  LogMeOut():void{

    console.log('Logg Out button is clicked for user: ')
    console.log(localStorage.getItem('user'))
    console.log('Removing user...')
    
    localStorage.removeItem("user");
    console.log('Removed...Checking if user is null now')
    console.log(localStorage.getItem('user'))
    this.router.navigate(['']);
    
  }
}
