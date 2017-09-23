import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import * as actions from '../../redux/slidebar/action';
import { Router } from '@angular/router';

import { LogDefaultService, LogService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  // providers: [
  //   {
  //     provide: LogService,
  //     useClass: LogDefaultService
  //   }
  // ]
})
export class SidebarComponent implements OnInit {
  menus$: any;
  menus: any[];
  constructor(
    public store$: Store<any>,
    public router: Router,
    public log: LogService
  ) {
    this.menus$ = this.store$.select('slidebar').map(res => res.items);
    this.menus$.subscribe(res => {
      this.menus = res;
    });
    this.log.log('SidebarComponent');
  }

  ngOnInit() {

  }

  onClick(e: any, items: any[], item: any) {
    e.stopPropagation();
    this.menus.map(ress => {
      ress.children.map(res => {
        if (res === item) { } else {
          res.active = false;
        }
      })
    });
    item.active = !item.active;
    item.link && this.router.navigate(item.link);
  }

  onToggle(e: any, item: any) {
    item = e;
  }
}
