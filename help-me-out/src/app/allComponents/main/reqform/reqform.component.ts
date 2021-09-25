import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reqform',
  templateUrl: './reqform.component.html',
  styleUrls: ['./reqform.component.css']
})
export class ReqformComponent implements OnInit {
  // TODO: PULL FROM LOCALSTORAGE
  lat;
  long;
  is;
  in;
  issue = new FormControl('');
  incentive = new FormControl('');  

  constructor(private router: Router) {
    this.lat = localStorage.getItem('lat');
    this.long = localStorage.getItem('lng');
    this.is = localStorage.getItem('issue');
    this.in = localStorage.getItem('incentive')
   }

  ngOnInit(): void {
  }
  handleSubmit() {
    localStorage.setItem('issue', this.issue.value);
    localStorage.setItem('incentive', this.incentive.value);
    // console.log(this.issue.value);
    // console.log(this.incentive.value);
    console.log("Submitted!");
  }
}
