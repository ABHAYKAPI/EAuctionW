import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

//const AUTH_API = 'https://authenticationwebapi20221020173359.azurewebsites.net/api/Account';

const AUTH_API = 'http://localhost:36469/api/Account';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggdIn = false;
  roleAs:string;

  constructor(private http: HttpClient,private tokenStorageService:TokenStorageService) { }

  login(credentials): Observable<any> {
    debugger;
    return this.http.post(AUTH_API, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');

    this.isLoggdIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn)
      return true;
    else
      return false;
  }

  getRole() {
    const user = this.tokenStorageService.getUser();
    this.roleAs = user.roles;
    return this.roleAs;
  }
}