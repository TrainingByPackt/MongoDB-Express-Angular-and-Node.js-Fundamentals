import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.css']
})
export class StructuralDirComponent implements OnInit {

  courseTitles = ['MEAN Stack', 'MEVN Stack', 'MERN Stack'];


  constructor() { }

  ngOnInit() {
  }

}
