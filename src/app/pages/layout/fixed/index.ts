import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixedRoutingModule } from './fixed-routing.module';
import { FixedComponent } from './fixed.component';

@NgModule({
  imports: [
    CommonModule,
    FixedRoutingModule
  ],
  declarations: [FixedComponent]
})
export class FixedModule { }
