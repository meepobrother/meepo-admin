import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V1Component } from './v1.component';

const routes: Routes = [
  {
    path: '',
    component: V1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V1RoutingModule { }
