import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectsComponent } from './selects.component';
import { A11yModule } from '@angular/cdk/a11y';
@NgModule({
  imports: [
    CommonModule,
    A11yModule
  ],
  declarations: [
    SelectsComponent
  ],
  exports: [
    SelectsComponent
  ]
})
export class SelectsModule { }
