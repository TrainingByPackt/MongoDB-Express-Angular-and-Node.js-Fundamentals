import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
<<<<<<< HEAD
=======
import { environment } from '../../environments/environment'
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD

  registerUrl= "http://localhost:3000/auth/register";
  loginUrl= "http://localhost:3000/auth/sign_in";
=======
  config = environment;
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

  constructor(private http: HttpClient,
    private router: Router) { }

  registerUser(user) {
<<<<<<< HEAD
    return this.http.post<any>(`${this.registerUrl}`, user)
  }

  loginUser(user) {
    return this.http.post<any>(`${this.loginUrl}`, { 'email': user.email, 'password': user.password })
=======
    return this.http.post<any>(`${this.config.registerUrl}`, user)
  }

  loginUser(user) {
    return this.http.post<any>(`${this.config.loginUrl}`, { 'email': user.email, 'password': user.password })
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
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
