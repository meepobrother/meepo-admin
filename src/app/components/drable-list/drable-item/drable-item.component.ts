import { Directive, OnInit,TemplateRef } from '@angular/core';

@Directive({
  selector: '[drable-item],drable-item'
})
export class DrableItemComponent implements OnInit {

  constructor(
    public templateRef: TemplateRef<any>
  ) { }

  ngOnInit() {
  }

}
