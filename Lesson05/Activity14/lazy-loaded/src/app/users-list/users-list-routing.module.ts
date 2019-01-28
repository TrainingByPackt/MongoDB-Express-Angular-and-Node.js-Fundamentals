import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  UsersListComponent} from './users-list.component'

const routes: Routes = [
    { path: "", component: UsersListComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule { }
