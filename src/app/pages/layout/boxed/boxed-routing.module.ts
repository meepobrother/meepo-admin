import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxedComponent } from './boxed.component';

const routes: Routes = [
  {
    path: '',
    component: BoxedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxedRoutingModule { }
