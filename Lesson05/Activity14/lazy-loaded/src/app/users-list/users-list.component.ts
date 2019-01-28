import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from "../model/users.model";
import { UsersListService } from "../service/users-list.service";
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userlists: Users[];
  constructor(private router: Router, private usersService: UsersListService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((user: any) => {
      this.userlists = user;
      console.log(this.userlists);
    });
  }


}
