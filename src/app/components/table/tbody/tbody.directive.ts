import { Directive,TemplateRef } from '@angular/core';

@Directive({
  selector: '[tbody]'
})
export class TbodyDirective {

  constructor(
    public templateRef: TemplateRef<any>
  ) { }

}
