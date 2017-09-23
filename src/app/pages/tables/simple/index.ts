import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleRoutingModule } from './simple-routing.module';
import { SimpleComponent } from './simple.component';

@NgModule({
  imports: [
    CommonModule,
    SimpleRoutingModule
  ],
  declarations: [SimpleComponent]
})
export class SimpleModule { }
