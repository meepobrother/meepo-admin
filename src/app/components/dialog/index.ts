import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { DialogContainerComponent } from './dialog-container/dialog-container.component';

// overlay 
// portal

const COMPONENTS = [
  DialogContainerComponent
];


@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    DialogService
  ]
})
export class DialogModule { }
