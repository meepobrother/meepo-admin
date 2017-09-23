import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorsRoutingModule } from './editors-routing.module';
import { EditorsComponent } from './editors.component';

@NgModule({
  imports: [
    CommonModule,
    EditorsRoutingModule
  ],
  declarations: [EditorsComponent]
})
export class EditorsModule { }
