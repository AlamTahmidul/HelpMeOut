import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user;
  constructor(public router: Router) {
    this.user = localStorage.getItem('user');
   }

  ngOnInit(): void {
  }

  logMeOut(): void {
    localStorage.removeItem('user');
    this.router.navigate(['']);
    alert('Logged Out!');
  }

}
