import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxedRoutingModule } from './boxed-routing.module';
import { BoxedComponent } from './boxed.component';

@NgModule({
  imports: [
    CommonModule,
    BoxedRoutingModule
  ],
  declarations: [BoxedComponent]
})
export class BoxedModule { }
