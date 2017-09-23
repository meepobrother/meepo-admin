import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MorrisRoutingModule } from './morris-routing.module';
import { MorrisComponent } from './morris.component';

@NgModule({
  imports: [
    CommonModule,
    MorrisRoutingModule
  ],
  declarations: [MorrisComponent]
})
export class MorrisModule { }
