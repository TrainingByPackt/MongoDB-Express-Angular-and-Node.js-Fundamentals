import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PacktStudentTemplateFormComponent } from './packt-student-template-form/packt-student-template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PacktStudentTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
