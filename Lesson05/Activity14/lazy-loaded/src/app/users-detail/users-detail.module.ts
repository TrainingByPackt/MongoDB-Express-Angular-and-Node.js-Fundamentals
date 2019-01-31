import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  UsersDetailComponent} from './users-detail.component'
import { UsersDetailRoutingModule } from './users-detail-routing.module';

@NgModule({
  declarations: [UsersDetailComponent],
  imports: [
    CommonModule,
    UsersDetailRoutingModule
  ]
})
export class UsersDetailModule { }
