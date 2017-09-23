import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'charts',
        children: [
          {
            path: 'chartjs',
            loadChildren: 'app/pages/charts/chartjs#ChartjsModule'
          },
          {
            path: 'morris',
            loadChildren: 'app/pages/charts/morris#MorrisModule'
          },
          {
            path: 'flot',
            loadChildren: 'app/pages/charts/flot#FlotModule'
          },
          {
            path: 'inline-charts',
            loadChildren: 'app/pages/charts/inline-charts#InlineChartsModule'
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
export class ChartsModule { }
