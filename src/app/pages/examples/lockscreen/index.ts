import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockscreenRoutingModule } from './lockscreen-routing.module';
import { LockscreenComponent } from './lockscreen.component';

@NgModule({
  imports: [
    CommonModule,
    LockscreenRoutingModule
  ],
  declarations: [LockscreenComponent]
})
export class LockscreenModule { }
