import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: User = {
    firstName: 'Paul',
    lastName: 'Oluyege'
  };
  isLoggedIn: boolean;
  constructor(private usersService:UserService) { }

  ngOnInit() {
    this.usersService.cast.subscribe(user=> this.isLoggedIn = user);
  }

  login() {
    this.isLoggedIn = true;
    this.usersService.User(this.isLoggedIn);
  }

  signup() {
    this.isLoggedIn = true;
    this.usersService.User(this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    this.usersService.User(this.isLoggedIn);
  }

}
