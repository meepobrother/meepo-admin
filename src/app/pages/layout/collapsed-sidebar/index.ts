import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapsedSidebarRoutingModule } from './collapsed-sidebar-routing.module';
import { CollapsedSidebarComponent } from './collapsed-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    CollapsedSidebarRoutingModule
  ],
  declarations: [CollapsedSidebarComponent]
})
export class CollapsedSidebarModule { }
