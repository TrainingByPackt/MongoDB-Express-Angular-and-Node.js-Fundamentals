import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareTextDirective } from '../text/share-text.directive';


@NgModule({
  declarations: [ShareTextDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ShareTextDirective    ]
})


export class SharedModule { }
