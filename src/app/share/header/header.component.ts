import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  config: any;
  constructor(
    public store$: Store<any>
  ) { 
    this.config = this.store$.select('config')
  }

  ngOnInit() {

  }

}
