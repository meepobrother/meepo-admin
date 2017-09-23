import { Directive, Input, TemplateRef, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';

export class PermissionContext {
  constructor(
    public $implicit: boolean
  ) { }
}
// 权限验证失败返回
const permissionError = new PermissionContext(false);

@Directive({
  selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnChanges {
  items: string[] = ['canPost'];

  @Input() hasPermission: string;
  constructor(
    public templateRef: TemplateRef<any>,
    public view: ViewContainerRef
  ) { }
  // 监听@Input() hasPermission变化
  ngOnChanges(changes: SimpleChanges) {
    const permission = changes['hasPermission'].currentValue;
    // 检查这个 permisssion 是否拥有
    const hasPermission = this.items.indexOf(permission);
    if (hasPermission !== -1) {
      // 权限验证成功返回
      const context = new PermissionContext(true);
      this.view.createEmbeddedView(this.templateRef, context);
    } else {
      // 权限验证失败返回
      this.view.createEmbeddedView(this.templateRef, permissionError);
    }
  }

}
