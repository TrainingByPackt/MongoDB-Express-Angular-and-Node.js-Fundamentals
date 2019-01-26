import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Users } from '../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new Users('', '', '');
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerUser();
  }


  registerUser() {
  }



}
