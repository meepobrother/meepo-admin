import {
  Component,
  OnInit,
  ContentChildren,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
  ContentChild,
  Query,
  ViewChildDecorator,
  ViewChild as CoreViewChild,
  ɵmakeDecorator,
  ɵa,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';

import { DialogService } from './components/dialog/dialog.service';

declare var $;
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { HeaderComponent } from '@meepo/share';

import { LogService } from './services';
import { TabPanelComponent } from './components/tab/tab-panel/tab-panel.component';
import { DialogComponent } from './tests/dialog/dialog.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: LogService,
      useClass: LogService
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  title = 'app';
  open: any;

  @ViewChildren(TabPanelComponent) panels: any;
  activePanel: number = 0;

  data: any[] = [
    {
      realname: '张三',
      nickname: '小三',
      mobile: '1234',
      html: `
        <span>{{item.realname}}</span>
        <span>{{item.realname}}</span>
        <span>{{item.nickname}}</span>
      `
    },
    {
      realname: '张四',
      nickname: '小四',
      mobile: '12345'
    },
    {
      realname: '小五',
      nickname: '小四',
      mobile: '12345'
    },
    {
      realname: '小六',
      nickname: '小四',
      mobile: '12345'
    }
  ];

  onChange(e: any){
    console.log(e);
  }

  constructor(
    public store$: Store<any>,
    public log: LogService,
    public dialogService: DialogService,
    public router: Router
  ) {
    this.open = this.store$.select('sidebarToggle').map(res => res.open);
    this.log.log('app component constructor');
  }

  ngOnInit() {
    console.log('app component ngOnInit');
    console.log(this.panels);

    const dialog: any = this.dialogService.open<DialogComponent>(DialogComponent);
    console.log(dialog);
  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {
    // this.log.log('app component ngAfterViewInit');
    console.log(this.panels);
  }

  ngAfterViewChecked() {
    // this.log.log('app component ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    // this.log.log('app component ngAfterContentChecked');
  }

}
