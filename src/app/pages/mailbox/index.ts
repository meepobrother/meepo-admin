import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'mailbox',
        children: [
          {
            path: 'compose',
            loadChildren: 'app/pages/mailbox/compose#ComposeModule'
          },
          {
            path: 'mailbox',
            loadChildren: 'app/pages/mailbox/mailbox#MailboxModule'
          },
          {
            path: 'read-mail',
            loadChildren: 'app/pages/mailbox/read-mail#ReadMailModule'
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
export class MailboxModule { }
