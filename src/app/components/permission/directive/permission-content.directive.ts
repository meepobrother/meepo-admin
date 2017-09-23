import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[permissionContent]'
})
export class PermissionContentDirective {

  constructor(
    public templateRef: TemplateRef<any>
  ) { }

}
