import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay.component';
import { OverlayService } from './overlay.service';

import { OverlayTemplateDirective } from './overlay-template.directive';

import {
  ScrollDispatchModule
} from '@angular/cdk/scrolling';
import {
  PlatformModule
} from '@angular/cdk/platform';


@NgModule({
  imports: [
    CommonModule,
    ScrollDispatchModule,
    PlatformModule
  ],
  declarations: [OverlayComponent, OverlayTemplateDirective],
  exports: [OverlayComponent, OverlayTemplateDirective],
  providers: [OverlayService]
})
export class OverlayModule { }
