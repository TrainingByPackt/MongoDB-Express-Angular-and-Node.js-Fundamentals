import { Directive, Input, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myUnderline]'
})
export class UnderlineDirective {

  constructor(public el: ElementRef, public renderer: Renderer) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
}

@HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
}

hover(shouldUnderline: boolean){
  if(shouldUnderline){
 this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
  } else {this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
  }
}

}
