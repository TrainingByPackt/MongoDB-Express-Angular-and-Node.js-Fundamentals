import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../service//auth.service';
import { Router } from '@angular/router'
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  displayMessage: string;
  submitted = false;
  error = '';
  loading = false;
  success = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router) {
    /* Declare Reactive Form Group here */
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]],
      password: ['', [
        Validators.minLength(8),
        Validators.required
      ]],
    });
  }

  submitForm() {
    this.submitted = true;
    let user = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // this.loading = true;
    
    this.authService.loginUser(user)
      .pipe(first())
      .subscribe(
        data => {
          this.success = 'Login successful';
          setTimeout(this.navigateToBlogHome.bind(this), 2000);

        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  navigateToBlogHome() {
    this.router.navigate(['/blog']);
  }

}
