import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicePrintRoutingModule } from './invoice-print-routing.module';
import { InvoicePrintComponent } from './invoice-print.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicePrintRoutingModule
  ],
  declarations: [InvoicePrintComponent]
})
export class InvoicePrintModule { }
