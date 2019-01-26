import { Component, OnInit } from '@angular/core';
import { Posts } from '../post';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  tags = ['POLITICS', 'ECONOMY', 'EDUCATION','STORY','TECH'];

  model = new Posts('','','','');

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  console.log(this.model)
}
  constructor() { }

  ngOnInit() {
  }

}
