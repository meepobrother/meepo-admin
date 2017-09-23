import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartjsRoutingModule } from './chartjs-routing.module';
import { ChartjsComponent } from './chartjs.component';

@NgModule({
  imports: [
    CommonModule,
    ChartjsRoutingModule
  ],
  declarations: [ChartjsComponent]
})
export class ChartjsModule { }
