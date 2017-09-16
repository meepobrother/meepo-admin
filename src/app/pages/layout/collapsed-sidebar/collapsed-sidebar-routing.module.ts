import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollapsedSidebarComponent } from './collapsed-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: CollapsedSidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollapsedSidebarRoutingModule { }
