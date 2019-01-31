import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPostComponent } from './view-post.component';
import { ViewPostRoutingModule } from './view-post-routing.module';

@NgModule({
  declarations: [ViewPostComponent],
  imports: [
    CommonModule,
    ViewPostRoutingModule
  ]
})
export class ViewPostModule { }
