import {
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Component,
  OnInit,
  ContentChildren,
  AfterContentChecked,
  AfterContentInit,
  ViewChild,
  Renderer2,
  TemplateRef,
  QueryList,
  ViewContainerRef
} from '@angular/core';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

import { SelectionModel, SelectionChange } from '@angular/cdk/collections';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabPanelComponent) panels: QueryList<TabPanelComponent>;

  items: any;
  template: TemplateRef<any>;
  constructor(
    public render: Renderer2
  ) { }

  ngOnInit() {
    const selectModal = new SelectionModel<TabPanelComponent>(false, this.panels.toArray());
  }

  active(panel: TabPanelComponent) {
    this.panels.map((res: TabPanelComponent) => {
      res.doUnActive();
    });
    panel.doActive();
    this.template = panel.templateRef;
  }

  ngAfterContentInit() {
    this.active(this.panels.first);
  }

}
