import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel, SelectionChange } from '@angular/cdk/collections';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {
  _itemsSelectModal: any = new SelectionModel<any>(true, [], true);
  _items: any[] = [];

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input()
  set items(val: any[]) {
    this._items = [...this._items, ...val];
  }

  get items() {
    return this._items;
  }

  constructor(
    liveAnnouncer: LiveAnnouncer
  ) {
    this._itemsSelectModal.onChange.subscribe(res => {
      this.onChange.emit(this._itemsSelectModal.selected);
    });
    liveAnnouncer.announce("Hey Google");
  }

  ngOnInit() {
    // this.items.sort();
    this._items.push({
      title: '小二'
    });
  }

  doSelect(item: any) {
    this._itemsSelectModal.toggle(item);
    // this.onChange.emit(this._itemsSelectModal.selected);
  }

  checkSelected(item: any) {
    return this._itemsSelectModal.isSelected(item);
  }

}
