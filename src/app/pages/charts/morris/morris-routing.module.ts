import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MorrisComponent } from './morris.component';

const routes: Routes = [
  {
    path: '',
    component: MorrisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MorrisRoutingModule { }
