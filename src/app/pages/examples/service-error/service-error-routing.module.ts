import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceErrorComponent } from './service-error.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceErrorRoutingModule { }
