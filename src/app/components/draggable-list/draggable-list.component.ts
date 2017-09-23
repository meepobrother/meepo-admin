import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { DraggableItemComponent } from './draggable-item/draggable-item.component';
@Component({
  selector: 'draggable-list, app-draggable-list, [draggableList], [draggable-list]',
  templateUrl: './draggable-list.component.html',
  styleUrls: ['./draggable-list.component.scss']
})
export class DraggableListComponent implements OnInit {
  @ContentChildren(DraggableItemComponent) items: QueryList<DraggableItemComponent>;
  constructor() { }

  ngOnInit() {
  }

}
