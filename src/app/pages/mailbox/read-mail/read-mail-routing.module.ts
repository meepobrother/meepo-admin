import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadMailComponent } from './read-mail.component';

const routes: Routes = [
  {
    path: '',
    component: ReadMailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadMailRoutingModule { }
