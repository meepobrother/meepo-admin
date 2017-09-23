import {
  Injectable,
  ComponentRef,
  TemplateRef,
  Optional,
  SkipSelf,
  ViewContainerRef
} from '@angular/core';
import {
  Location
} from '@angular/common';

import {
  ComponentPortal,
  ComponentType,
  TemplatePortal
} from '@angular/cdk/portal';

import {
  OverlayState,
  Overlay
} from '@angular/cdk/overlay';

import { Subject } from 'rxjs/Subject';
import { MdDialogConfig } from './domain/dialog.config';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';

@Injectable()
export class DialogService {

  constructor(
    private _overlay: Overlay,
    @Optional() @SkipSelf() public view: ViewContainerRef
  ) { }

  open<T>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>) {
    const overlay = this._overlay.create();
    let content: any;
    if (componentOrTemplateRef instanceof TemplateRef) {
      content = new TemplatePortal(componentOrTemplateRef, this.view, {});
    } else {
      content = new ComponentPortal(componentOrTemplateRef);
    }
    overlay.attach(content);
  }

}

