import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleHeaderComponent } from '../../title-header/title-header.component';


@NgModule({
  declarations: [TitleHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TitleHeaderComponent
  ]
})
export class SharedModule { }
