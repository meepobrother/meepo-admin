import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        children: [
          {
            path: 'v1',
            loadChildren: 'app/pages/dashboard/v1#V1Module'
          },
          {
            path: 'v2',
            loadChildren: 'app/pages/dashboard/v2#V2Module'
          }
        ]
      }
    ])
  ],
  declarations: []
})
export class DashboardModule { }
