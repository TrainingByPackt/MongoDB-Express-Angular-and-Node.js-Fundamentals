import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    StructuralDirComponent,
    AttributeDirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
