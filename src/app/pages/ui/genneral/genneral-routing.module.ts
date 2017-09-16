import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenneralComponent } from './genneral.component';

const routes: Routes = [
  {
    path: '',
    component: GenneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenneralRoutingModule { }
