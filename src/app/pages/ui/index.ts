import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'ui',
        children: [
          {
            path: 'buttons',
            loadChildren: 'app/pages/ui/buttons#ButtonsModule'
          },
          {
            path: 'general',
            loadChildren: 'app/pages/ui/genneral#GenneralModule'
          },
          {
            path: 'icons',
            loadChildren: 'app/pages/ui/icons#IconsModule'
          },
          {
            path: 'modals',
            loadChildren: 'app/pages/ui/modals#ModalsModule'
          },
          {
            path: 'sliders',
            loadChildren: 'app/pages/ui/sliders#SlidersModule'
          },
          {
            path: 'timeline',
            loadChildren: 'app/pages/ui/timeline#TimelineModule'
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
export class UiModule { }
