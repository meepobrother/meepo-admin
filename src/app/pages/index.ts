import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExamplesModule } from './examples';
import { FormsModule } from './forms';
import { UiModule } from './ui';
import { TablesModule } from './tables';
import { ChartsModule } from './charts';
import { DashboardModule } from './dashboard';
import { LayoutModule } from './layout';
import { MailboxModule } from './mailbox';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'dashboard/v1',
        pathMatch: 'full'
      },
      {
        path: 'widgets',
        loadChildren: 'app/pages/widgets#WidgetsModule'
      }
    ],{useHash: true}),
    ExamplesModule,
    FormsModule,
    UiModule,
    ChartsModule,
    TablesModule,
    DashboardModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
