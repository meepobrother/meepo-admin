import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../redux/control-sidebar/action';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navs: any[];
  navs$: any;

  user$: any;
  info: any;
  constructor(
    public store$: Store<any>
  ) { 
    //导航菜单
    this.navs$ = this.store$.select('navbar');
    this.navs$.subscribe(res=>{
      this.navs = res.items;
    });
    //用户信息
    this.user$ = this.store$.select('user');
    this.user$.subscribe(res=>{
      this.info = res;
    })
  }

  ngOnInit() {
  }

  toggleControlSidebar(){
    this.store$.dispatch( new actions.OpenAction({}) )
  }

}
