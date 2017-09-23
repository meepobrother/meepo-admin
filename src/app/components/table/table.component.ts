import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
  AfterViewInit,
  ViewContainerRef,
  TemplateRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { TableColumnComponent } from './table-column/table-column.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any[];
  @ContentChildren(TableColumnComponent) columns: QueryList<TableColumnComponent>;

  constructor() { }

  ngOnInit() {
    console.log(this.columns);
  }
}
