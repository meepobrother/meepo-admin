import {
  Directive,
  OnInit,
  Input,
  TemplateRef,
  ContentChild
} from '@angular/core';

import { TheadComponent } from '../thead/thead.component';
import { TbodyDirective } from '../tbody/tbody.directive';

@Directive({
  selector: '[app-table-column],app-table-column'
})
export class TableColumnComponent implements OnInit {

  @ContentChild(TheadComponent) header: TheadComponent;
  @ContentChild(TbodyDirective) body: TbodyDirective;
  
  constructor( ) { }

  ngOnInit() {
    console.log(this.header);
    console.log(this.body);
  }

}
