import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'layout',
        children: [
          {
            path: 'boxed',
            loadChildren: 'app/pages/layout/boxed#BoxedModule'
          },
          {
            path: 'collapsed-sidebar',
            loadChildren: 'app/pages/layout/collapsed-sidebar#CollapsedSidebarModule'
          },
          {
            path: 'fixed',
            loadChildren: 'app/pages/layout/fixed#FixedModule'
          },
          {
            path: 'top-nav',
            loadChildren: 'app/pages/layout/top-nav#TopNavModule'
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
export class LayoutModule { }
