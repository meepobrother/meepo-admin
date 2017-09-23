import {
  Component,
  OnInit,
  ComponentRef,
  EmbeddedViewRef,
  ViewChild,
  ContentChild
} from '@angular/core';
import {
  BasePortalHost,
  ComponentPortal,
  TemplatePortal,
  PortalHostDirective
} from '@angular/cdk/portal';
/**
 * cdkPortalHost
 */
@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.css']
})
export class DialogContainerComponent extends BasePortalHost implements OnInit {
  portal: any;
  @ViewChild(PortalHostDirective) _portalHost: PortalHostDirective;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    if (this._portalHost.hasAttached()) {
      throwMdDialogContentAlreadyAttachedError();
    }

    return this._portalHost.attachComponentPortal(portal);
  }
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this._portalHost.hasAttached) {
      throwMdDialogContentAlreadyAttachedError();
    }
    return this._portalHost.attachTemplatePortal(portal);
  }

}


function throwMdDialogContentAlreadyAttachedError() {
  throw Error('Attempting to attach dialog content after content is already attached');
}
