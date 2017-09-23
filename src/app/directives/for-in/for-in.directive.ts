import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appFor][appForIn]'
})
export class ForInDirective implements OnChanges {
  @Input() appForIn: number;
  // div *appFor="let item in 10"
  constructor(
    public view: ViewContainerRef,
    public template: TemplateRef<any>
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    const value = changes['appForIn'].currentValue;
    this.view.clear();
    for (let i = 1; i <= value; i++) {
      const view = this.view.createEmbeddedView(this.template, { $implicit: i });
    }
  }

}
