import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUrl= "http://localhost:3000/auth/register";
  loginUrl= "http://localhost:3000/auth/sign_in";

  constructor(private http: HttpClient,
    private router: Router) { }

  registerUser(user) {
    return this.http.post<any>(`${this.registerUrl}`, user)
  }

  loginUser(user) {
    return this.http.post<any>(`${this.loginUrl}`, { 'email': user.email, 'password': user.password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logoutUser() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/blog'])
  }
}
