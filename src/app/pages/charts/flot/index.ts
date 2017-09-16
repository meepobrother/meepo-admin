import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlotRoutingModule } from './flot-routing.module';
import { FlotComponent } from './flot.component';

@NgModule({
  imports: [
    CommonModule,
    FlotRoutingModule
  ],
  declarations: [FlotComponent]
})
export class FlotModule { }
