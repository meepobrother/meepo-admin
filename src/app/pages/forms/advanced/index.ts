import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { AdvancedComponent } from './advanced.component';

@NgModule({
  imports: [
    CommonModule,
    AdvancedRoutingModule
  ],
  declarations: [AdvancedComponent]
})
export class AdvancedModule { }
