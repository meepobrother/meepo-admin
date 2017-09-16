import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadMailRoutingModule } from './read-mail-routing.module';
import { ReadMailComponent } from './read-mail.component';

@NgModule({
  imports: [
    CommonModule,
    ReadMailRoutingModule
  ],
  declarations: [ReadMailComponent]
})
export class ReadMailModule { }
