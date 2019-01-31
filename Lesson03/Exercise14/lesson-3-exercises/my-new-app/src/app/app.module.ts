import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarsService } from './cars.service';
import { FormsModule } from '@angular/forms';
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
    BrowserModule,
    FormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
