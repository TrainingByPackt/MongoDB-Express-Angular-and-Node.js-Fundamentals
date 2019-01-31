import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  UsersDetailComponent} from './users-detail.component'

const routes: Routes = [
    { path: "", component: UsersDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersDetailRoutingModule { }
