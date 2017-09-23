import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrableListComponent } from './drable-list.component';
import { DrableItemComponent } from './drable-item/drable-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DrableListComponent, DrableItemComponent],
  exports: [DrableListComponent, DrableItemComponent]
})
export class DrableListModule { }
