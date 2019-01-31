import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[input-box]'
})
export class ShareTextDirective {

  constructor(private elementRef: ElementRef) {
  } 
  ngOnInit() { 
    this.elementRef.nativeElement.innerHTML ='<h1>Welcome to Packt MEANStack Courseware Class</h1>';
    }
  

}
