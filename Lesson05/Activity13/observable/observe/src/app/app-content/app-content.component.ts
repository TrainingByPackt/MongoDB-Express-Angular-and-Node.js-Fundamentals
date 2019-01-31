import { Component, OnInit } from '@angular/core';
import { User } from './../user/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  user: User = {
    firstName: 'Paul',
    lastName: 'Oluyege'
  };
  isLoggedIn: boolean;
  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.usersService.cast.subscribe(user => this.isLoggedIn = user);
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
    this.usersService.User(this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    this.usersService.User(this.isLoggedIn);
  }

}
