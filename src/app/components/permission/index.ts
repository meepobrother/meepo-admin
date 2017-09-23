// 导出模块
export * from './directive';
export * from './components';

// 导入模块
import * as components from './components';
import * as directives from './directive';

const DIRECTIVES = [
  directives.HasPermissionDirective,
  directives.PermissionContentDirective,
  directives.ErrorPermissionDirective,
  components.PermissionContainerComponent
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DIRECTIVES
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class PermissionModule { }
