import { Directive, HostListener, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import * as sidebarToggleActions from '@meepo/redux/slidebar-toggle/action';

@Directive({
  selector: '[sidebar-toggle], sidebar-toggle'
})
export class SidebarToggleDirective {
  constructor(public store: Store<any>) { }
  @HostListener('click', ['$event.target'])
  onClick(e) {
    this.store.dispatch(new sidebarToggleActions.ToggleAction());
  }
}
