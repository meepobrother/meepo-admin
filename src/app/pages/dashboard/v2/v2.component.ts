import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.css']
})
export class V2Component implements OnInit {
  data$: any;
  infoboxs: any[];
  
  constructor(
    public store$: Store<any>
  ) { 
    this.data$ = this.store$.select('pagesDashboard');
    this.data$.subscribe(res=>{
      this.infoboxs = res.infoboxs;
    })
  }

  ngOnInit() {
  }

}
