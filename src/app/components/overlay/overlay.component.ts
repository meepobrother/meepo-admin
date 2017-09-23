import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Overlay
} from '@angular/cdk/overlay';

import {
  ComponentPortal,
  TemplatePortal
} from '@angular/cdk/portal';

import {
  ScrollDispatcher,
  Scrollable
} from '@angular/cdk/scrolling';


import { DialogComponent } from '../../tests/dialog/dialog.component';
import { OverlayTemplateDirective } from './overlay-template.directive';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  @ViewChild(Scrollable) scrollable: Scrollable;
  constructor(
    public overlay: Overlay,
    public scrollDispatcher: ScrollDispatcher
  ) { }

  ngOnInit() {
    // console.log(this.scrollDispatcher);
    // 注册滚动元素
    // this.scrollDispatcher.register(this.scrollable);

    // 监听滚动事件
    this.scrollDispatcher.scrolled(20, () => {
      console.log('scrolled');
    });

    this.scrollable.elementScrolled().subscribe(res => {
      console.log(res);
    });

    // this.scrollDispatcher.deregister(this.scrollable);
  }

  create() {
    const overlayRef = this.overlay.create();
    const userProfilePortal = new ComponentPortal(DialogComponent);
    overlayRef.attach(userProfilePortal);
  }

}
