import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PacktStudentTemplateFormComponent } from './packt-student-template-form/packt-student-template-form.component';
import { PacktSimpleReactiveFormComponent } from './packt-simple-reactive-form/packt-simple-reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PacktStudentTemplateFormComponent,
    PacktSimpleReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
