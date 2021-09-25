import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
api = 'http://localhost:5000/api/auth/login'
  constructor(private httpClient: HttpClient) { }


  loginUser(user: any){
    console.log(user)
    return this.httpClient.post(this.api, user);
  }
}

