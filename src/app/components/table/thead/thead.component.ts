import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[thead]'
})
export class TheadComponent {

  constructor(
    public templateRef: TemplateRef<any>
  ) { }
  
}
