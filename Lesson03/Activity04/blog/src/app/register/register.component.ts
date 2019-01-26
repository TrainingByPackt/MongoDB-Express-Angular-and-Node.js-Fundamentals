import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new Users('', '', '');
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerUser();
  }


  registerUser() {
    console.log('Registration Successful')
  }



}
