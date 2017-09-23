import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidersRoutingModule } from './sliders-routing.module';
import { SlidersComponent } from './sliders.component';

@NgModule({
  imports: [
    CommonModule,
    SlidersRoutingModule
  ],
  declarations: [SlidersComponent]
})
export class SlidersModule { }
