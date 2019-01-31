import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHomeComponent } from './blog-home.component';
import { SharedModule } from '../shared/shared/shared.module'
import { BlogHomeRoutingModule } from './blog-home-routing.module';

@NgModule({
  declarations: [BlogHomeComponent],
  imports: [
    CommonModule,
    BlogHomeRoutingModule,
    SharedModule
  ]
})
export class BlogHomeModule { }
