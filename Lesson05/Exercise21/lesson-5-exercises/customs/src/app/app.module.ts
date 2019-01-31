import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IfDirective } from './if/if.directive';
import { UnderlineDirective } from './underline/underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    IfDirective,
    UnderlineDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
