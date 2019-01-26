import { Component, OnInit } from '@angular/core';
import { Students }    from '../students';
@Component({
  selector: 'app-packt-student-template-form',
  templateUrl: './packt-student-template-form.component.html',
  styleUrls: ['./packt-student-template-form.component.css']
})
export class PacktStudentTemplateFormComponent {

 
  courseTitles = ['MEAN Stack', 'MEVN Stack', 'MERN Stack'];

  model = new Students(1, 'Paul Adams', this.courseTitles[0], '6 days');

  submitted = false;

  onSubmit() { this.submitted = true; }
  newStudent() {
    this.model = new Students(42, '', '');
  }
}