import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[errorPermission]'
})
export class ErrorPermissionDirective {

  constructor(
    public templateRef: TemplateRef<any>
  ) { }

}
