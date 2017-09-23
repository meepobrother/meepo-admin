import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFondComponent } from './not-fond.component';

const routes: Routes = [
  {
    path: '',
    component: NotFondComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFondRoutingModule { }
