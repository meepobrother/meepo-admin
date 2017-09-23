import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestMdComponent } from './test-md.component';


import {MdCommonModule, MdRippleModule, StyleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdRippleModule
  ],
  declarations: [TestMdComponent],
  exports: [TestMdComponent]
})
export class TestMdModule { }
