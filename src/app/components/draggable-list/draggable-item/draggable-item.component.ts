import { Directive, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[draggable-item], [draggableItem]'
})
export class DraggableItemComponent implements OnInit {

  constructor(
    public templateRef: TemplateRef<any>
  ) { }

  ngOnInit() {
  }

}
