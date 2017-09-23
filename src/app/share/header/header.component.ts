import { Component, OnInit, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogChildService, LogService } from '../../services';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  viewProviders: [
    {
      provide: LogService,
      useClass: LogChildService
    }
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {
  config: any;
  constructor(
    public store$: Store<any>,
    public log: LogService
  ) {
    this.config = this.store$.select('config');
    this.log.log('app header constructor');
  }

  ngOnInit() {
    // this.log.log('app header ngOnInit');
  }

  ngAfterViewInit() {
    // this.log.log('app header ngAfterViewInit');
  }

  ngAfterContentInit() {
    // this.log.log('app header AfterContentInit');
  }

  ngAfterViewChecked() {
    // this.log.log('app header ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    // this.log.log('app header ngAfterContentChecked');
  }

}
