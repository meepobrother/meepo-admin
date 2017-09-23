import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V1RoutingModule } from './v1-routing.module';
import { V1Component } from './v1.component';

@NgModule({
  imports: [
    CommonModule,
    V1RoutingModule
  ],
  declarations: [V1Component]
})
export class V1Module { }
