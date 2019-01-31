import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'
import { Users } from '../users';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  submitted = false;
  error = '';
  success = '';
  model = new Users('', '', '');
  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    var that = this;
    this.loading = true;
    this.auth.registerUser(this.model)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.success = 'Registration successful';
          setTimeout(this.navigateToLogin.bind(this), 2000);
        },
        error => {
          this.error = error
          this.loading = false;
        });
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
