import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'slidebar-user',
  templateUrl: './slidebar-user.component.html',
  styleUrls: ['./slidebar-user.component.css']
})
export class SlidebarUserComponent implements OnInit {
  user$: any;
  info: any;
  constructor(
    public store$: Store<any>
  ) { 
    this.user$ = this.store$.select('user');
    this.user$.subscribe(res=>{
      this.info = res;
    })
  }

  ngOnInit() {
  }

}
