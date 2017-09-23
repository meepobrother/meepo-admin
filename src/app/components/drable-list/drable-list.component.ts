import { Component, OnInit, ViewContainerRef, ContentChildren, QueryList,TemplateRef } from '@angular/core';
import { DrableItemComponent } from './drable-item/drable-item.component';
@Component({
  selector: 'app-drable-list',
  templateUrl: './drable-list.component.html',
  styleUrls: ['./drable-list.component.scss']
})
export class DrableListComponent implements OnInit {
  @ContentChildren(DrableItemComponent) items:  QueryList<DrableItemComponent>;

  outlet: any;
  constructor(
    public view: ViewContainerRef
  ) { }

  ngOnInit() {
    console.log(this.view);
  }

}
