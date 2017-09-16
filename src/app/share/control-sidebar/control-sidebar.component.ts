import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'control-sidebar',
  templateUrl: './control-sidebar.component.html',
  styleUrls: ['./control-sidebar.component.css']
})
export class ControlSidebarComponent implements OnInit {
  open: boolean;
  constructor(
    public store$: Store<any>
  ) { 
    let open$ = this.store$.select('controlSidebar').map(res=>res.open);
    open$.subscribe(res=>{
      this.open = res;
    })
  }

  ngOnInit() {
    
  }

}
