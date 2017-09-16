import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceErrorRoutingModule } from './service-error-routing.module';
import { ServiceErrorComponent } from './service-error.component';

@NgModule({
  imports: [
    CommonModule,
    ServiceErrorRoutingModule
  ],
  declarations: [ServiceErrorComponent]
})
export class ServiceErrorModule { }
