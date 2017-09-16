import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'tables',
        children: [
          {
            path: 'data',
            loadChildren: 'app/pages/tables/data#DataModule'
          },
          {
            path: 'simple',
            loadChildren: 'app/pages/tables/simple#SimpleModule'
          }
        ]
      }
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class TablesModule { }
