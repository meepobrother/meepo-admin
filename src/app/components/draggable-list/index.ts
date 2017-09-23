import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableListComponent } from './draggable-list.component';
import { DraggableItemComponent } from './draggable-item/draggable-item.component';
import { DraggableDirective } from './draggable/draggable.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DraggableListComponent, DraggableItemComponent, DraggableDirective],
  exports: [DraggableListComponent, DraggableItemComponent, DraggableDirective]
})
export class DraggableListModule { }
