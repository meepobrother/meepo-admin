import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockscreenComponent } from './lockscreen.component';

const routes: Routes = [
  {
    path: '',
    component: LockscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockscreenRoutingModule { }
