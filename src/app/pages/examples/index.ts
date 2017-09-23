import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'examples',
        children: [
          {
            path: 'blank',
            loadChildren: 'app/pages/examples/blank#BlankModule'
          },
          {
            path: 'invoice',
            loadChildren: 'app/pages/examples/invoice#InvoiceModule'
          },
          {
            path: 'invoice-print',
            loadChildren: 'app/pages/examples/invoice-print#InvoicePrintModule'
          },
          {
            path: 'lockscreen',
            loadChildren: 'app/pages/examples/lockscreen#LockscreenModule'
          },
          {
            path: 'login',
            loadChildren: 'app/pages/examples/login#LoginModule'
          },
          {
            path: '404',
            loadChildren: 'app/pages/examples/not-fond#NotFondModule'
          },
          {
            path: 'pace',
            loadChildren: 'app/pages/examples/pace#PaceModule'
          },
          {
            path: 'profile',
            loadChildren: 'app/pages/examples/profile#ProfileModule'
          },
          {
            path: 'register',
            loadChildren: 'app/pages/examples/register#RegisterModule'
          },
          {
            path: '500',
            loadChildren: 'app/pages/examples/service-error#ServiceErrorModule'
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
export class ExamplesModule { }
