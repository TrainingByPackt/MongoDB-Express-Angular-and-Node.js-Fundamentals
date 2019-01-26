import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PacktStudentReactiveFormComponent } from './packt-student-reactive-form/packt-student-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PacktStudentReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
