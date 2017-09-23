import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenneralRoutingModule } from './genneral-routing.module';
import { GenneralComponent } from './genneral.component';

@NgModule({
  imports: [
    CommonModule,
    GenneralRoutingModule
  ],
  declarations: [GenneralComponent]
})
export class GenneralModule { }
