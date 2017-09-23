import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableColumnComponent } from './table-column/table-column.component';
import { TheadComponent } from './thead/thead.component';
import { TbodyDirective } from './tbody/tbody.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, TableColumnComponent, TheadComponent, TbodyDirective],
  exports: [TableComponent, TableColumnComponent, TheadComponent, TbodyDirective]
})
export class TableModule { }
