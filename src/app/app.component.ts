import { Component } from '@angular/core';
declare var $;
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  open: any;
  constructor(
    public store$: Store<any>
  ){
    this.open = this.store$.select('sidebarToggle').map(res=>res.open)
  }
  ngOnInit(){
    $['widget'].bridge('uibutton', $['ui'].button);
  }
}
