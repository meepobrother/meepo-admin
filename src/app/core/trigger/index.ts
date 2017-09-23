import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { PopupInnerComponent } from './popup-inner/popup-inner.component';

const COMPONENTS = [
  PopupComponent,
  PopupInnerComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS],
  exports: [COMPONENTS]
})
export class TriggerModule { }
