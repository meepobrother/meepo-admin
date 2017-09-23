import { Injectable } from '@angular/core';
import {
  Overlay
} from '@angular/cdk/overlay';

import {
  ComponentPortal,
  TemplatePortal
} from '@angular/cdk/portal';

@Injectable()
export class OverlayService {

  constructor(
    public overlay: Overlay
  ) { }

  create(com: any) {
    const overlayRef = this.overlay.create();
    const portal = new ComponentPortal(com);
    overlayRef.attach(portal);
  }

}
