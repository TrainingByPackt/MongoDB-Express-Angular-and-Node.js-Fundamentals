import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-dir',
  templateUrl: './attribute-dir.component.html',
  styleUrls: ['./attribute-dir.component.css']
})
export class AttributeDirComponent implements OnInit {

  constructor() { }
  hide = true;

  public myStyle={
      "color":"green"
    }
  
  
  ngOnInit() {
  }

}
