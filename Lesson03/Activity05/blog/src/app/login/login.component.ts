import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  displayMessage: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
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
    /* Change the display message on button click / submit form */
    if (this.loginForm.valid) {
      this.loginUser();
    }

  }

  loginUser() {
  }


}
