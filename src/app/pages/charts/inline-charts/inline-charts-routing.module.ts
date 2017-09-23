import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineChartsComponent } from './inline-charts.component';

const routes: Routes = [
  {
    path: '',
    component: InlineChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InlineChartsRoutingModule { }
