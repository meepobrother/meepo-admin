import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFondRoutingModule } from './not-fond-routing.module';
import { NotFondComponent } from './not-fond.component';

@NgModule({
  imports: [
    CommonModule,
    NotFondRoutingModule
  ],
  declarations: [NotFondComponent]
})
export class NotFondModule { }
