import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import * as actions from '../../redux/slidebar/action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menus$: any;
  menus: any[];
  constructor(
    public store$: Store<any>,
    public router: Router
  ) {
    this.menus$ = this.store$.select('slidebar').map(res=>res.items);
    this.menus$.subscribe(res=>{
      this.menus = res;
    });
  }

  ngOnInit() {

  }

  onClick(e: any,items: any[],item: any){
    e.stopPropagation();
    this.menus.map(ress=>{
      ress.children.map(res=>{
        if(res === item){}else{
          res.active = false;        
        }
      })
    });
    item.active = !item.active;
    item.link && this.router.navigate(item.link);
  }

  onToggle(e: any,item: any){
    item = e;
  }
}
