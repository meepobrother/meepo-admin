import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineChartsRoutingModule } from './inline-charts-routing.module';
import { InlineChartsComponent } from './inline-charts.component';

@NgModule({
  imports: [
    CommonModule,
    InlineChartsRoutingModule
  ],
  declarations: [InlineChartsComponent]
})
export class InlineChartsModule { }
