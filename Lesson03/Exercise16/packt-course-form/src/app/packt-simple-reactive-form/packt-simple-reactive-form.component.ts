import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-packt-simple-reactive-form',
  templateUrl: './packt-simple-reactive-form.component.html',
  styleUrls: ['./packt-simple-reactive-form.component.css']
})
export class PacktSimpleReactiveFormComponent implements OnInit {
  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    });
  constructor() { }

  ngOnInit() {
  }

}
