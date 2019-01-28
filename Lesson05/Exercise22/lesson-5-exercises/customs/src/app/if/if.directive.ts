import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[myIf]'
})
export class IfDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set myIf(shouldAdd: boolean) {
    if (shouldAdd) {
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Else remove template from DOM
      this.viewContainer.clear();
    }
  }

}
