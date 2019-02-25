import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
<<<<<<< HEAD
import { BehaviorSubject } from 'rxjs';
=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  config = environment;
<<<<<<< HEAD
  private user = new BehaviorSubject<boolean>(false);
  cast = this.user.asObservable();

=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

  constructor(private http: HttpClient,
    private router: Router) { }

<<<<<<< HEAD
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    if (token) return true
    // Check whether the token exist
    // true or false
    else return false
  }

=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
  registerUser(user) {
    return this.http.post<any>(`${this.config.registerUrl}`, user)
  }

  loginUser(user) {
    return this.http.post<any>(`${this.config.loginUrl}`, { 'email': user.email, 'password': user.password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
<<<<<<< HEAD
          localStorage.setItem('currentUser', JSON.stringify('JWT ' + user.token));
        }
        this.user.next(true);
=======
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
        return user;
      }));
  }

  logoutUser() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
<<<<<<< HEAD
    this.user.next(false);
=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
    this.router.navigate(['/blog'])
  }
}
