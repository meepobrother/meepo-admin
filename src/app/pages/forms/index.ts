import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'forms',
        children: [
          {
            path: 'advanced',
            loadChildren: 'app/pages/forms/advanced#AdvancedModule'
          },
          {
            path: 'editors',
            loadChildren: 'app/pages/forms/editors#EditorsModule'
          },
          {
            path: 'general',
            loadChildren: 'app/pages/forms/general#GeneralModule'
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
export class FormsModule { }
