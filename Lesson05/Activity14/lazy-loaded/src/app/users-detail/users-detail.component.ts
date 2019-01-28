import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { Users } from "../model/users.model";
import { UsersListService } from "../service/users-list.service";

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user: Users;
  constructor(private router: Router, private route: ActivatedRoute, private usersService: UsersListService) { }

  ngOnInit(): void {

    this.usersService.getUser(this.route.snapshot.params["id"]).subscribe((user: any) => {
      this.user = user;
    });


  }

  onBack() {
    //navigate back to user listing page
    this.router.navigateByUrl('/userslist');
  }

}
